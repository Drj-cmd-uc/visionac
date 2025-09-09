# Microsoft Graph API Setup for OneDrive Integration

This guide will help you set up Microsoft Graph API integration to store enrollment data in OneDrive, SharePoint, and send email notifications.

## Prerequisites

- Microsoft 365 account (Personal or Business)
- Azure account (free tier is sufficient)

## Step 1: Create Azure App Registration

1. Go to [Azure Portal](https://portal.azure.com)
2. Navigate to **Azure Active Directory** > **App registrations**
3. Click **New registration**
4. Fill in the details:
   - **Name**: Vision Accounting Enrollment App
   - **Supported account types**: Accounts in this organizational directory only
   - **Redirect URI**: Leave empty for now
5. Click **Register**

## Step 2: Configure API Permissions

1. In your app registration, go to **API permissions**
2. Click **Add a permission**
3. Select **Microsoft Graph** > **Application permissions**
4. Add these permissions:
   - `Files.ReadWrite.All` (for OneDrive access)
   - `Mail.Send` (for email notifications)
   - `Sites.ReadWrite.All` (for SharePoint access)
5. Click **Grant admin consent** for your organization

## Step 3: Create Client Secret

1. Go to **Certificates & secrets**
2. Click **New client secret**
3. Add a description and set expiration
4. Copy the **Value** (you won't see it again!)

## Step 4: Get Required IDs

1. **Client ID**: Found on the Overview page of your app registration
2. **Tenant ID**: Found on the Overview page of your app registration
3. **Client Secret**: The value you copied in Step 3

## Step 5: Configure Environment Variables

Create a `.env` file in your project root and add:

```env
MICROSOFT_CLIENT_ID=your_client_id_here
MICROSOFT_CLIENT_SECRET=your_client_secret_here
MICROSOFT_TENANT_ID=your_tenant_id_here
ENROLLMENT_NOTIFICATION_EMAIL=your_email@example.com
```

## Step 6: Optional SharePoint Configuration

If you want to save data to a SharePoint list:

1. Create a SharePoint site and list
2. Get the Site ID:
   ```
   GET https://graph.microsoft.com/v1.0/sites/{hostname}:{site-path}
   ```
3. Get the List ID:
   ```
   GET https://graph.microsoft.com/v1.0/sites/{site-id}/lists
   ```
4. Add to your `.env` file:
   ```env
   SHAREPOINT_SITE_ID=your_site_id
   SHAREPOINT_LIST_ID=your_list_id
   ```

## Features Available

### 1. OneDrive Storage
- JSON files: `enrollment_timestamp_name.json`
- CSV files: `enrollments_date.csv` (compatible with Excel/Access)

### 2. Email Notifications
- Automatic email when new enrollment is submitted
- HTML formatted with all enrollment details

### 3. SharePoint Lists
- Structured data storage for easy database integration
- Compatible with Power Apps and Power BI

### 4. Local Backup
- Always saves locally as backup regardless of cloud configuration
- Files saved in `enrollments/` folder

## File Locations in OneDrive

All enrollment files will be saved in:
- **OneDrive Path**: `/EnrollmentData/`
- **JSON Files**: Individual enrollment records
- **CSV Files**: Daily consolidated data for easy import

## Troubleshooting

### Common Issues

1. **401 Unauthorized**: Check your client credentials
2. **403 Forbidden**: Ensure admin consent is granted for API permissions
3. **Files not appearing**: Check the `/EnrollmentData/` folder in OneDrive

### Testing the Integration

1. Start your development server: `npm run dev`
2. Submit a test enrollment through the form
3. Check the API response for success/error messages
4. Verify files appear in OneDrive `/EnrollmentData/` folder

## Alternative: Local Storage Only

If you prefer not to use cloud integration, the system will automatically save enrollment data locally in the `enrollments/` folder as:
- Individual JSON files
- Consolidated CSV file for Excel/Access import

This local data can be manually uploaded to OneDrive or imported into Access as needed.
