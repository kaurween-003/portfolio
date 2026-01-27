// EmailJS Configuration
// Replace these with your actual EmailJS credentials from https://www.emailjs.com/

export const emailConfig = {
  serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_i60vi9a',
  templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_flpcx0z',
  publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY || '4eZYWdkQ_i42UISzv'
};

// Instructions to set up EmailJS:
// 1. Go to https://www.emailjs.com/ and create an account
// 2. Create a new service (Gmail, Outlook, etc.)
//    IMPORTANT FOR GMAIL: Grant ALL permissions when connecting!
// 3. Create an email template with these variables:
//    - {{from_name}} - sender's name
//    - {{from_email}} - sender's email
//    - {{subject}} - email subject
//    - {{message}} - email message
//    - {{to_email}} - your email (kulweenkaur.infosec@gmail.com)
//    - {{reply_to}} - sender's email for replies
// 4. Get your Service ID, Template ID, and Public Key
// 5. Replace the values above or set environment variables

// TROUBLESHOOTING:
// If you get "insufficient authentication scopes" error:
// 1. Delete the Gmail service in EmailJS dashboard
// 2. Recreate it and grant ALL permissions
// 3. Alternative: Use Outlook or another email service instead
