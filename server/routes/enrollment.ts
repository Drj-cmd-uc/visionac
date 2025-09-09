import { RequestHandler } from "express";
import { z } from "zod";
import { MicrosoftGraphService, LocalFileService } from "../services/microsoftGraph";

// Validation schema for enrollment data
const enrollmentSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(1, "Phone number is required"),
  address: z.string().optional(),
  selectedCourse: z.string().min(1, "Course selection is required"),
  preferredTiming: z.string().min(1, "Preferred timing is required"),
  previousExperience: z.string().optional(),
  motivation: z.string().optional(),
});

export const handleEnrollmentSubmission: RequestHandler = async (req, res) => {
  try {
    // Validate the incoming data
    const enrollmentData = enrollmentSchema.parse(req.body);
    
    // Add timestamp
    const enrichedData = {
      ...enrollmentData,
      submittedAt: new Date().toISOString(),
      id: `enrollment_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    };

    const results: string[] = [];

    // Check if Microsoft Graph credentials are available
    const hasGraphCredentials = process.env.MICROSOFT_CLIENT_ID && 
                                process.env.MICROSOFT_CLIENT_SECRET && 
                                process.env.MICROSOFT_TENANT_ID;

    if (hasGraphCredentials) {
      try {
        const graphService = new MicrosoftGraphService({
          clientId: process.env.MICROSOFT_CLIENT_ID!,
          clientSecret: process.env.MICROSOFT_CLIENT_SECRET!,
          tenantId: process.env.MICROSOFT_TENANT_ID!
        });

        // Save to OneDrive as JSON
        const oneDriveResult = await graphService.saveEnrollmentToOneDrive(enrichedData);
        results.push(`OneDrive: ${oneDriveResult}`);

        // Save to OneDrive as CSV for Excel/Access import
        const csvResult = await graphService.saveEnrollmentToCSV(enrichedData);
        results.push(`CSV: ${csvResult}`);

        // Send email notification if recipient email is configured
        if (process.env.ENROLLMENT_NOTIFICATION_EMAIL) {
          const emailResult = await graphService.sendEnrollmentEmail(
            enrichedData, 
            process.env.ENROLLMENT_NOTIFICATION_EMAIL
          );
          results.push(`Email: ${emailResult}`);
        }

        // Save to SharePoint list if configured
        if (process.env.SHAREPOINT_SITE_ID && process.env.SHAREPOINT_LIST_ID) {
          const sharePointResult = await graphService.saveToSharePointList(
            enrichedData,
            process.env.SHAREPOINT_SITE_ID,
            process.env.SHAREPOINT_LIST_ID
          );
          results.push(`SharePoint: ${sharePointResult}`);
        }

      } catch (graphError) {
        console.error('Microsoft Graph error:', graphError);
        results.push(`Graph API Error: ${graphError instanceof Error ? graphError.message : 'Unknown error'}`);
      }
    }

    // Always save locally as backup
    try {
      const localService = new LocalFileService();
      const localResult = await localService.saveEnrollmentLocally(enrichedData);
      results.push(`Local: ${localResult}`);
    } catch (localError) {
      console.error('Local save error:', localError);
      results.push(`Local Error: ${localError instanceof Error ? localError.message : 'Unknown error'}`);
    }

    // Return success response
    res.status(200).json({
      success: true,
      message: "Enrollment submitted successfully!",
      enrollmentId: enrichedData.id,
      storage: results,
      data: enrichedData
    });

  } catch (error) {
    console.error('Enrollment submission error:', error);
    
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        success: false,
        message: "Invalid enrollment data",
        errors: error.errors
      });
    }

    res.status(500).json({
      success: false,
      message: "Failed to process enrollment submission",
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};

// Get all enrollments (for admin purposes)
export const getEnrollments: RequestHandler = async (req, res) => {
  try {
    const fs = await import('fs/promises');
    const path = await import('path');
    
    const enrollmentsDir = path.join(process.cwd(), 'enrollments');
    
    try {
      const files = await fs.readdir(enrollmentsDir);
      const jsonFiles = files.filter(file => file.endsWith('.json'));
      
      const enrollments = await Promise.all(
        jsonFiles.map(async (file) => {
          const filePath = path.join(enrollmentsDir, file);
          const content = await fs.readFile(filePath, 'utf-8');
          return JSON.parse(content);
        })
      );

      // Sort by submission date (newest first)
      enrollments.sort((a, b) => new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime());

      res.status(200).json({
        success: true,
        count: enrollments.length,
        enrollments
      });

    } catch (error) {
      res.status(200).json({
        success: true,
        count: 0,
        enrollments: [],
        message: "No enrollments found"
      });
    }

  } catch (error) {
    console.error('Error retrieving enrollments:', error);
    res.status(500).json({
      success: false,
      message: "Failed to retrieve enrollments",
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};

// Download enrollments as CSV
export const downloadEnrollmentsCSV: RequestHandler = async (req, res) => {
  try {
    const fs = await import('fs/promises');
    const path = await import('path');
    
    const enrollmentsDir = path.join(process.cwd(), 'enrollments');
    const csvPath = path.join(enrollmentsDir, 'enrollments.csv');
    
    try {
      const csvContent = await fs.readFile(csvPath, 'utf-8');
      
      res.setHeader('Content-Type', 'text/csv');
      res.setHeader('Content-Disposition', `attachment; filename="enrollments_${new Date().toISOString().split('T')[0]}.csv"`);
      res.send(csvContent);
      
    } catch (error) {
      res.status(404).json({
        success: false,
        message: "No enrollment data found"
      });
    }

  } catch (error) {
    console.error('Error downloading CSV:', error);
    res.status(500).json({
      success: false,
      message: "Failed to download enrollment data",
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};
