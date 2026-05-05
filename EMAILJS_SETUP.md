# EmailJS Configuration

## What is EmailJS?

EmailJS is a service that sends emails directly from your frontend application without needing a backend server. It connects to your email account and sends emails on your behalf.

## How It Works

1. **Frontend Form** → Collects user data
2. **EmailJS Library** → Sends request to EmailJS servers (uses your Service ID & Public Key)
3. **EmailJS Servers** → Routes email using your email account credentials (stored securely on EmailJS servers)
4. **Email Sent** → Arrives at recipient's inbox

## Our Configuration

### Environment Variables (Safe to Commit)
```
VITE_EMAILJS_SERVICE_ID=service_vlbveka
VITE_EMAILJS_PUBLIC_KEY=P04g8tzTaVqqub8L0
VITE_EMAILJS_MEMBERSHIP_TEMPLATE_ID=template_4aet21w
VITE_EMAILJS_RIDE_REQUEST_TEMPLATE_ID=template_4aet21w
VITE_EMAILJS_CONTACT_TEMPLATE_ID=template_qqvs1g3
VITE_EMAILJS_SERVICE_REQUEST_TEMPLATE_ID=template_qqvs1g3
```

### Sensitive Credentials (Never Commit)
The following credentials should **NEVER** be stored in code or version control:
- Email account login
- Email account password
- API tokens with write access

These are stored **securely in EmailJS dashboard** and only referenced by Service ID.

## Setup Instructions

1. **Create EmailJS Account** at [emailjs.com](https://emailjs.com)
2. **Login** with your email credentials (only store locally/securely)
3. **Add Email Service** (Gmail, SendGrid, etc.) in EmailJS dashboard
4. **Copy Service ID** → Add to `.env.local` as `VITE_EMAILJS_SERVICE_ID`
5. **Generate Public Key** → Add to `.env.local` as `VITE_EMAILJS_PUBLIC_KEY`
6. **Create Email Templates** with variable placeholders (e.g., `{{from_name}}`, `{{phone}}`)
7. **Copy Template IDs** → Add to `.env.local`

## Template Variables

### Membership Application (template_4aet21w)
```
{{from_name}}
{{from_email}}
{{phone}}
{{grade}}
{{age}}
{{home_address}}
{{school}}
{{why_interested}}
{{unique_about_you}}
{{leadership_interest}}
{{previous_experience}}
{{to_email}}
```

### Ride Request (template_4aet21w)
```
{{from_name}}
{{from_email}}
{{phone}}
{{pickup_address}}
{{pickup_city}}
{{pickup_state}}
{{pickup_zip}}
{{dropoff_address}}
{{dropoff_city}}
{{dropoff_state}}
{{dropoff_zip}}
{{description}}
{{pickup_time}}
{{return_time}}
{{to_email}}
```

### Contact Form (template_qqvs1g3)
```
{{from_name}}
{{from_email}}
{{message}}
{{to_email}}
```

## Form Implementation

Forms use `window.emailjs.send()` to submit data:

```typescript
await (window as any).emailjs.send(
  "service_vlbveka",        // Service ID
  "template_4aet21w",       // Template ID
  {
    from_name: "John Doe",
    from_email: "john@example.com",
    phone: "555-1234",
    // ... other fields
    to_email: "silverhearttest@gmail.com"  // Recipient
  }
);
```

## Security Notes

- ✅ Service ID & Public Key can be committed (public info)
- ❌ Email passwords should never be in code
- ✅ EmailJS securely manages email credentials on their servers
- ❌ Never share `.env.local` or credentials in repos/PRs
- ✅ Use `.env.example` with placeholder values only

## Troubleshooting

- **"Email service not connected"** → Check Service ID in EmailJS dashboard
- **"Template not found"** → Verify Template ID matches EmailJS dashboard
- **"Invalid public key"** → Regenerate Public Key from EmailJS settings
- **Emails not sending** → Check email service status in EmailJS dashboard

## References

- [EmailJS Docs](https://www.emailjs.com/docs/)
- [Email Templates Guide](https://www.emailjs.com/docs/templates/)
- [Service Setup](https://www.emailjs.com/docs/service/)
