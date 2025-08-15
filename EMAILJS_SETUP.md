# 📧 EmailJS Setup Guide for Your Portfolio

Your contact form is now ready with EmailJS integration! Follow these steps to make it fully functional.

## 🚀 Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## ⚙️ Step 2: Create Email Service

1. **Login to EmailJS Dashboard**
2. Go to "Email Services" tab
3. Click "Add New Service"
4. Choose your email provider:
   - **Gmail** (recommended for beginners)
   - **Outlook**
   - **Yahoo**
   - **Custom SMTP**

### For Gmail:
- Service Name: `gmail` (or any name you prefer)
- Click "Connect Account"
- Authorize EmailJS to access your Gmail
- Save the service

## 📝 Step 3: Create Email Template

1. Go to "Email Templates" tab
2. Click "Create New Template"
3. Use this template structure:

```html
Subject: New Contact Form Message from {{name}}

Name: {{name}}
Email: {{email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Save the template and note the **Template ID**

## 🔑 Step 4: Get Your Credentials

1. **Service ID**: From Email Services tab
2. **Template ID**: From Email Templates tab  
3. **Public Key**: From Account tab → API Keys

## 🎯 Step 5: Update Your Code

Replace the placeholder values in `src/components/contact/Contact.jsx`:

```javascript
// Replace these with your actual EmailJS credentials
const result = await emailjs.sendForm(
  'YOUR_SERVICE_ID',     // ← Your Service ID here
  'YOUR_TEMPLATE_ID',    // ← Your Template ID here
  form.current,
  'YOUR_PUBLIC_KEY'      // ← Your Public Key here
);
```

## 🧪 Step 6: Test Your Form

1. Start your development server: `npm start`
2. Go to your contact section
3. Fill out the form and submit
4. Check your email inbox
5. Check the browser console for any errors

## 🔧 Troubleshooting

### Common Issues:

1. **"Service not found" error**
   - Check your Service ID is correct
   - Ensure the service is active

2. **"Template not found" error**
   - Verify your Template ID
   - Check template is published

3. **"Invalid public key" error**
   - Copy the Public Key exactly
   - Ensure you're using the right key type

4. **Form submits but no email received**
   - Check spam/junk folder
   - Verify email service connection
   - Check EmailJS dashboard for delivery status

## 📱 Features of Your New Contact Form

✅ **Real-time validation**  
✅ **Loading states**  
✅ **Success/Error messages**  
✅ **Futuristic cyberpunk styling**  
✅ **Responsive design**  
✅ **Form data persistence**  
✅ **Professional email delivery**

## 🎨 Customization Options

### Change Email Template:
- Modify the template in EmailJS dashboard
- Add more fields if needed
- Customize email styling

### Modify Form Fields:
- Add/remove fields in `Contact.jsx`
- Update validation rules
- Change placeholder text

### Styling Updates:
- Modify `contact.css` for visual changes
- Adjust colors, animations, and effects
- Update responsive breakpoints

## 📊 EmailJS Free Plan Limits

- **200 emails per month**
- **2 email templates**
- **1 email service**
- **Basic support**

## 💡 Pro Tips

1. **Test thoroughly** before deploying
2. **Monitor your email delivery** in EmailJS dashboard
3. **Set up email notifications** for new messages
4. **Consider upgrading** if you expect high volume
5. **Backup your credentials** securely

## 🆘 Need Help?

- **EmailJS Documentation**: [docs.emailjs.com](https://docs.emailjs.com/)
- **EmailJS Support**: [support.emailjs.com](https://support.emailjs.com/)
- **Community Forum**: [community.emailjs.com](https://community.emailjs.com/)

---

Your contact form is now ready to receive professional emails! 🎉
