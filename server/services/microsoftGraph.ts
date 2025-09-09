import { Client } from '@microsoft/microsoft-graph-client';
import { AuthenticationProvider } from '@microsoft/microsoft-graph-client';
import { ConfidentialClientApplication } from '@azure/msal-node';

interface GraphConfig {
  clientId: string;
  clientSecret: string;
  tenantId: string;
}

class CustomAuthProvider implements AuthenticationProvider {
  private msalInstance: ConfidentialClientApplication;

  constructor(config: GraphConfig) {
    this.msalInstance = new ConfidentialClientApplication({
      auth: {
        clientId: config.clientId,
        clientSecret: config.clientSecret,
        authority: `https://login.microsoftonline.com/${config.tenantId}`,
      },
    });
  }

  async getAccessToken(): Promise<string> {
    const clientCredentialRequest = {
      scopes: ['https://graph.microsoft.com/.default'],
    };

    try {
      const response = await this.msalInstance.acquireTokenSilent(clientCredentialRequest);
      return response.accessToken;
    } catch (error) {
      const response = await this.msalInstance.acquireTokenByClientCredential(clientCredentialRequest);
      return response?.accessToken || '';
    }
  }
}

export class MicrosoftGraphService {
  private graphClient: Client;
  private config: GraphConfig;

  constructor(config: GraphConfig) {
    this.config = config;
    const authProvider = new CustomAuthProvider(config);
    this.graphClient = Client.initWithMiddleware({ authProvider });
  }

  /**
   * Save enrollment data to OneDrive as a JSON file
   */
  async saveEnrollmentToOneDrive(enrollmentData: any): Promise<string> {
    try {
      const fileName = `enrollment_${Date.now()}_${enrollmentData.fullName.replace(/\s+/g, '_')}.json`;
      const fileContent = JSON.stringify(enrollmentData, null, 2);
      
      // Create or update file in OneDrive
      const response = await this.graphClient
        .api(`/me/drive/root:/EnrollmentData/${fileName}:/content`)
        .put(fileContent);

      return response.webUrl || 'File saved successfully';
    } catch (error) {
      console.error('Error saving to OneDrive:', error);
      throw new Error('Failed to save enrollment data to OneDrive');
    }
  }

  /**
   * Save enrollment data to OneDrive as CSV for easier Excel/Access import
   */
  async saveEnrollmentToCSV(enrollmentData: any): Promise<string> {
    try {
      const fileName = `enrollments_${new Date().toISOString().split('T')[0]}.csv`;
      
      // Check if file exists, if not create with headers
      let existingContent = '';
      try {
        const existingFile = await this.graphClient
          .api(`/me/drive/root:/EnrollmentData/${fileName}:/content`)
          .get();
        existingContent = existingFile;
      } catch (error) {
        // File doesn't exist, create headers
        existingContent = 'Timestamp,Full Name,Email,Phone,Address,Selected Course,Preferred Timing,Previous Experience,Motivation\n';
      }

      // Format data as CSV row
      const csvRow = [
        new Date().toISOString(),
        enrollmentData.fullName,
        enrollmentData.email,
        enrollmentData.phone,
        enrollmentData.address,
        enrollmentData.selectedCourse,
        enrollmentData.preferredTiming,
        enrollmentData.previousExperience,
        enrollmentData.motivation?.replace(/,/g, ';') || ''
      ].map(field => `"${field}"`).join(',') + '\n';

      const updatedContent = existingContent + csvRow;

      // Save updated CSV file
      const response = await this.graphClient
        .api(`/me/drive/root:/EnrollmentData/${fileName}:/content`)
        .put(updatedContent);

      return response.webUrl || 'Data appended to CSV successfully';
    } catch (error) {
      console.error('Error saving to CSV:', error);
      throw new Error('Failed to save enrollment data to CSV');
    }
  }

  /**
   * Create a SharePoint list item for easier database integration
   */
  async saveToSharePointList(enrollmentData: any, siteId: string, listId: string): Promise<string> {
    try {
      const listItem = {
        fields: {
          Title: `Enrollment - ${enrollmentData.fullName}`,
          FullName: enrollmentData.fullName,
          Email: enrollmentData.email,
          Phone: enrollmentData.phone,
          Address: enrollmentData.address,
          SelectedCourse: enrollmentData.selectedCourse,
          PreferredTiming: enrollmentData.preferredTiming,
          PreviousExperience: enrollmentData.previousExperience,
          Motivation: enrollmentData.motivation,
          EnrollmentDate: new Date().toISOString()
        }
      };

      const response = await this.graphClient
        .api(`/sites/${siteId}/lists/${listId}/items`)
        .post(listItem);

      return `SharePoint item created with ID: ${response.id}`;
    } catch (error) {
      console.error('Error saving to SharePoint:', error);
      throw new Error('Failed to save enrollment data to SharePoint');
    }
  }

  /**
   * Send enrollment data via email
   */
  async sendEnrollmentEmail(enrollmentData: any, recipientEmail: string): Promise<string> {
    try {
      const emailContent = {
        message: {
          subject: `New Enrollment: ${enrollmentData.fullName} - ${enrollmentData.selectedCourse}`,
          body: {
            contentType: 'HTML',
            content: `
              <h2>New Student Enrollment</h2>
              <h3>Personal Information</h3>
              <ul>
                <li><strong>Name:</strong> ${enrollmentData.fullName}</li>
                <li><strong>Email:</strong> ${enrollmentData.email}</li>
                <li><strong>Phone:</strong> ${enrollmentData.phone}</li>
                <li><strong>Address:</strong> ${enrollmentData.address}</li>
                <li><strong>Experience:</strong> ${enrollmentData.previousExperience}</li>
              </ul>
              <h3>Course Details</h3>
              <ul>
                <li><strong>Course:</strong> ${enrollmentData.selectedCourse}</li>
                <li><strong>Preferred Timing:</strong> ${enrollmentData.preferredTiming}</li>
                <li><strong>Motivation:</strong> ${enrollmentData.motivation}</li>
              </ul>
              <p><strong>Enrollment Date:</strong> ${new Date().toLocaleString()}</p>
            `
          },
          toRecipients: [
            {
              emailAddress: {
                address: recipientEmail
              }
            }
          ]
        }
      };

      await this.graphClient
        .api('/me/sendMail')
        .post(emailContent);

      return 'Enrollment notification email sent successfully';
    } catch (error) {
      console.error('Error sending email:', error);
      throw new Error('Failed to send enrollment notification email');
    }
  }
}

// Alternative: Local file storage for development/testing
export class LocalFileService {
  async saveEnrollmentLocally(enrollmentData: any): Promise<string> {
    const fs = await import('fs/promises');
    const path = await import('path');
    
    try {
      const enrollmentsDir = path.join(process.cwd(), 'enrollments');
      
      // Create directory if it doesn't exist
      try {
        await fs.access(enrollmentsDir);
      } catch {
        await fs.mkdir(enrollmentsDir, { recursive: true });
      }

      // Save as JSON file
      const fileName = `enrollment_${Date.now()}_${enrollmentData.fullName.replace(/\s+/g, '_')}.json`;
      const filePath = path.join(enrollmentsDir, fileName);
      
      await fs.writeFile(filePath, JSON.stringify(enrollmentData, null, 2));
      
      // Also append to CSV for Excel compatibility
      const csvPath = path.join(enrollmentsDir, 'enrollments.csv');
      let csvContent = '';
      
      try {
        csvContent = await fs.readFile(csvPath, 'utf-8');
      } catch {
        // File doesn't exist, create headers
        csvContent = 'Timestamp,Full Name,Email,Phone,Address,Selected Course,Preferred Timing,Previous Experience,Motivation\n';
      }

      const csvRow = [
        new Date().toISOString(),
        enrollmentData.fullName,
        enrollmentData.email,
        enrollmentData.phone,
        enrollmentData.address,
        enrollmentData.selectedCourse,
        enrollmentData.preferredTiming,
        enrollmentData.previousExperience,
        enrollmentData.motivation?.replace(/,/g, ';') || ''
      ].map(field => `"${field}"`).join(',') + '\n';

      await fs.writeFile(csvPath, csvContent + csvRow);
      
      return `Enrollment saved locally: ${fileName}`;
    } catch (error) {
      console.error('Error saving locally:', error);
      throw new Error('Failed to save enrollment data locally');
    }
  }
}
