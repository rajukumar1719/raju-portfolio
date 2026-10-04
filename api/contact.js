import nodemailer from 'nodemailer';
import { Resend } from 'resend';

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || 'rajukumarranchi17@gmail.com';

function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({
      success: false,
      error: `Method ${req.method} Not Allowed. Please use POST.`
    });
  }

  try {
    const { name, email, subject, message } = req.body || {};

    // 1. Validation
    if (!name || typeof name !== 'string' || !name.trim()) {
      return res.status(400).json({
        success: false,
        error: 'Please provide your name.'
      });
    }

    if (!email || typeof email !== 'string' || !isValidEmail(email.trim())) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a valid work email address.'
      });
    }

    if (!message || typeof message !== 'string' || !message.trim()) {
      return res.status(400).json({
        success: false,
        error: 'Please enter your message.'
      });
    }

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedSubject = subject && typeof subject === 'string' ? subject.trim() : 'General Inquiry';
    const trimmedMessage = message.trim();

    const emailSubject = `[Portfolio Contact] ${trimmedSubject}`;

    const textBody = `[Portfolio Contact Inquiry]

Name: ${trimmedName}
Email: ${trimmedEmail}
Subject/Role: ${trimmedSubject}

Message:
${trimmedMessage}

--------------------------------------------------
Sent from Raju Kumar Developer Portfolio
Reply-To: ${trimmedEmail}
`;

    const htmlBody = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0b0f19; color: #e2e8f0; margin: 0; padding: 24px; }
    .card { max-width: 600px; margin: 0 auto; background-color: #131b2e; border: 1px solid #1e293b; border-radius: 16px; padding: 32px; box-shadow: 0 10px 25px rgba(0,0,0,0.5); }
    .header { border-bottom: 1px solid #1e293b; padding-bottom: 16px; margin-bottom: 24px; }
    .title { color: #38bdf8; font-size: 20px; font-weight: 700; margin: 0 0 6px 0; }
    .subtitle { color: #94a3b8; font-size: 13px; margin: 0; }
    .field-group { margin-bottom: 16px; }
    .field-label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b; font-weight: 600; margin-bottom: 4px; }
    .field-value { font-size: 14px; color: #f1f5f9; font-weight: 500; }
    .message-box { background-color: #070a13; border: 1px solid #1e293b; border-radius: 12px; padding: 16px; color: #e2e8f0; font-size: 14px; line-height: 1.6; white-space: pre-wrap; margin-top: 6px; }
    .footer { border-top: 1px solid #1e293b; padding-top: 16px; margin-top: 24px; font-size: 12px; color: #64748b; text-align: center; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <h2 class="title">⚡ New Portfolio Message</h2>
      <p class="subtitle">Received from https://raju-kumar-portfolio-seven.vercel.app</p>
    </div>
    
    <div class="field-group">
      <div class="field-label">Sender Name</div>
      <div class="field-value">${escapeHtml(trimmedName)}</div>
    </div>
    
    <div class="field-group">
      <div class="field-label">Work Email</div>
      <div class="field-value"><a href="mailto:${escapeHtml(trimmedEmail)}" style="color: #38bdf8; text-decoration: none;">${escapeHtml(trimmedEmail)}</a></div>
    </div>
    
    <div class="field-group">
      <div class="field-label">Subject / Role Title</div>
      <div class="field-value">${escapeHtml(trimmedSubject)}</div>
    </div>
    
    <div class="field-group">
      <div class="field-label">Message</div>
      <div class="message-box">${escapeHtml(trimmedMessage)}</div>
    </div>
    
    <div class="footer">
      You can reply directly to this email to respond to <strong>${escapeHtml(trimmedName)}</strong> (<a href="mailto:${escapeHtml(trimmedEmail)}" style="color: #38bdf8;">${escapeHtml(trimmedEmail)}</a>).
    </div>
  </div>
</body>
</html>
`;

    // 2. Strategy 1: Resend API
    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      const fromEmail = process.env.RESEND_FROM_EMAIL || 'Portfolio Contact <onboarding@resend.dev>';

      const data = await resend.emails.send({
        from: fromEmail,
        to: [TO_EMAIL],
        replyTo: trimmedEmail,
        subject: emailSubject,
        text: textBody,
        html: htmlBody,
      });

      if (data.error) {
        console.error('Resend error:', data.error);
        return res.status(500).json({
          success: false,
          error: 'Email delivery failed via Resend: ' + (data.error.message || 'Unknown error')
        });
      }

      return res.status(200).json({
        success: true,
        message: 'Message delivered successfully via Resend.'
      });
    }

    // 3. Strategy 2: SMTP / Gmail (Nodemailer)
    const smtpHost = process.env.SMTP_HOST || (process.env.GMAIL_USER ? 'smtp.gmail.com' : null);
    const smtpUser = process.env.SMTP_USER || process.env.GMAIL_USER;
    const smtpPass = process.env.SMTP_PASS || process.env.GMAIL_APP_PASSWORD;
    const smtpPort = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 465;

    if (smtpHost && smtpUser && smtpPass) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      await transporter.sendMail({
        from: `"${trimmedName} via Portfolio" <${smtpUser}>`,
        to: TO_EMAIL,
        replyTo: trimmedEmail,
        subject: emailSubject,
        text: textBody,
        html: htmlBody,
      });

      return res.status(200).json({
        success: true,
        message: 'Message delivered successfully via SMTP.'
      });
    }

    // 4. Strategy 3: Web3Forms API fallback (if key provided)
    if (process.env.WEB3FORMS_ACCESS_KEY) {
      const web3Res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: process.env.WEB3FORMS_ACCESS_KEY,
          name: trimmedName,
          email: trimmedEmail,
          subject: emailSubject,
          message: textBody,
          from_name: 'Raju Kumar Portfolio Contact',
          replyto: trimmedEmail,
        }),
      });

      const web3Data = await web3Res.json();
      if (web3Data.success) {
        return res.status(200).json({
          success: true,
          message: 'Message delivered successfully via Web3Forms.'
        });
      } else {
        console.error('Web3Forms error:', web3Data);
        return res.status(500).json({
          success: false,
          error: web3Data.message || 'Failed to send message via Web3Forms.'
        });
      }
    }

    // 5. If no provider is configured yet on Vercel
    console.warn('No email provider credentials configured in environment variables.');
    return res.status(503).json({
      success: false,
      error: 'Email service credentials not yet configured on the server. Please contact rajukumarranchi17@gmail.com directly, or set RESEND_API_KEY or GMAIL_APP_PASSWORD in Vercel environment variables.'
    });

  } catch (err) {
    console.error('API Contact Error:', err);
    return res.status(500).json({
      success: false,
      error: 'Internal server error while sending email: ' + (err.message || 'Unknown error')
    });
  }
}

function escapeHtml(text) {
  if (!text) return '';
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
