# EmailJS Setup Instructions

## Step 1: Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up with your email (vicharesairaj07@gmail.com)
3. Verify your email

## Step 2: Create Email Service
1. Go to "Email Services" in dashboard
2. Click "Add New Service"
3. Choose "Gmail" 
4. Connect your Gmail account (vicharesairaj07@gmail.com)
5. Note the Service ID (replace 'service_portfolio' in Contact.js)

## Step 3: Create Email Template
1. Go to "Email Templates" 
2. Click "Create New Template"
3. Use this template:

**Subject:** New Portfolio Contact: {{from_name}}

**Content:**
```
You have a new message from your portfolio!

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
Sent from your portfolio contact form
```

4. Note the Template ID (replace 'template_contact' in Contact.js)

## Step 4: Get Public Key
1. Go to "Account" > "General"
2. Copy your Public Key
3. Replace 'YOUR_PUBLIC_KEY' in Contact.js

## Step 5: Update Contact.js
Replace these values in src/components/Contact.js:
- `service_portfolio` → Your Service ID
- `template_contact` → Your Template ID  
- `YOUR_PUBLIC_KEY` → Your Public Key

## Step 6: Test
1. Fill out your contact form
2. Check your email (vicharesairaj07@gmail.com)
3. You should receive the message!

## Free Tier Limits
- 200 emails/month
- Perfect for portfolio contact forms