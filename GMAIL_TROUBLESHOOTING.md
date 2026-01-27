# Gmail API Scopes Error - Troubleshooting Guide

## Problem
You're getting the error: `Gmail_API: Request had insufficient authentication scopes.`

This means EmailJS doesn't have the proper permissions to send emails through your Gmail account.

## Solution Steps

### Step 1: Delete Current Gmail Service
1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/admin)
2. Navigate to "Email Services"
3. Find your current Gmail service (`service_infosec`)
4. Click the **Delete** button to remove it

### Step 2: Recreate Gmail Service with Full Permissions
1. Click **"Add New Service"**
2. Select **"Gmail"**
3. **CRITICAL**: When the Google OAuth screen appears:
   - ✅ **Click "Allow" on ALL permission screens**
   - ✅ **Don't skip any steps**
   - ✅ **Grant permission to "Send email on your behalf"**
   - ✅ **Grant permission to "View your email address"**
   - ✅ **Complete the entire authorization flow**

### Step 3: Update Configuration (if needed)
1. Note the new Service ID from EmailJS dashboard
2. If it's different from `service_infosec`, update `src/config/emailConfig.js`:
```javascript
serviceId: 'your_new_service_id_here'
```

### Step 4: Test the Contact Form
1. Go to your website's contact page
2. Fill out and submit the form
3. Check for success message

## Alternative Solutions

### Option A: Use Outlook Instead of Gmail
If Gmail continues to have issues:
1. Create a new service in EmailJS
2. Choose **"Outlook"** instead of Gmail
3. Connect your Outlook/Hotmail account
4. Update the Service ID in your config

### Option B: Use EmailJS's SMTP Service
1. Create a new service in EmailJS
2. Choose **"SMTP"** 
3. Use these Gmail SMTP settings:
   - **SMTP Server**: smtp.gmail.com
   - **Port**: 587
   - **Username**: kulweenkaur.infosec@gmail.com
   - **Password**: [Use App Password - see below]

### Creating Gmail App Password (for SMTP option)
1. Go to [Google Account Settings](https://myaccount.google.com/)
2. Navigate to "Security"
3. Enable "2-Step Verification" if not already enabled
4. Go to "App passwords"
5. Generate a new app password for "Mail"
6. Use this password in EmailJS SMTP settings

## Testing Checklist
- [ ] Gmail service deleted and recreated
- [ ] All OAuth permissions granted
- [ ] Service ID updated in config (if changed)
- [ ] Template ID is correct (`template_infosec`)
- [ ] Public key is correct (`Tcq0S58xXyfiV4jkK`)
- [ ] Contact form tested successfully

## Still Having Issues?

### Check EmailJS Logs
1. Go to EmailJS Dashboard
2. Navigate to "Logs"
3. Look for recent failed attempts
4. Check the error details

### Verify Template Variables
Make sure your EmailJS template includes these variables:
- `{{from_name}}`
- `{{from_email}}`
- `{{subject}}`
- `{{message}}`
- `{{to_email}}`
- `{{reply_to}}`

### Contact EmailJS Support
If the issue persists:
1. Contact EmailJS support with the specific error
2. Mention you're getting "insufficient authentication scopes"
3. They can help verify your service configuration

## Quick Fix for Visitors
While you're fixing the email service, visitors can still contact you directly at:
**kulweenkaur.infosec@gmail.com**

The contact form will show a helpful error message directing them to email you directly.
