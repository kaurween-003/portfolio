# EmailJS Setup Guide for Contact Form

## Overview
Your contact form is now configured to send emails using EmailJS, a service that allows sending emails directly from frontend applications without a backend server.

## Setup Steps

### 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended)
4. Follow the setup instructions to connect your Gmail account
5. Note down your **Service ID** (e.g., `service_abc123`)

### 3. Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

**Subject:** New Contact Form Message: {{subject}}

**Body:**
```
Hello Kulween,

You have received a new message from your portfolio website contact form.

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This email was sent from your portfolio contact form.
Reply directly to this email to respond to {{from_name}}.
```

4. Set the template settings:
   - **To Email:** kulweenkaur.infosec@gmail.com
   - **From Name:** Portfolio Contact Form
   - **Reply To:** {{from_email}}

5. Save the template and note down your **Template ID** (e.g., `template_xyz789`)

### 4. Get Public Key
1. Go to "Account" → "General"
2. Find your **Public Key** (e.g., `user_abc123xyz`)

### 5. Update Configuration
1. Open `src/config/emailConfig.js`
2. Replace the placeholder values with your actual EmailJS credentials:

```javascript
export const emailConfig = {
  serviceId: 'your_actual_service_id',
  templateId: 'your_actual_template_id', 
  publicKey: 'your_actual_public_key'
};
```

### 6. Test the Contact Form
1. Run your website: `npm start`
2. Go to the Contact page
3. Fill out and submit the form
4. Check your email inbox for the message

## Security Notes
- EmailJS free plan allows 200 emails per month
- Your credentials are safe to use in frontend code
- Consider upgrading to a paid plan for production use

## Troubleshooting
- **Form shows error:** Check that all credentials are correct
- **No email received:** Check spam folder and EmailJS dashboard logs
- **Template variables not working:** Ensure variable names match exactly (case-sensitive)

## Alternative: Environment Variables (Optional)
For better security, you can use environment variables:

1. Create a `.env` file in your project root:
```
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

2. The configuration will automatically use these if available.

## Support
If you need help, check the EmailJS documentation at [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
