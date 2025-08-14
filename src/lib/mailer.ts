// Email configuration and utilities for Menorah Health
// Supports both Resend (recommended) and SMTP

interface EmailData {
  to: string
  from: string
  subject: string
  html: string
  text?: string
}

// Resend configuration (recommended)
const resendConfig = {
  apiKey: process.env.RESEND_API_KEY,
  from: 'Menorah Health <noreply@menorahhealth.com>',
}

// SMTP configuration (fallback)
const smtpConfig = {
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
}

/**
 * Send email using Resend (recommended)
 */
async function sendWithResend(data: EmailData): Promise<boolean> {
  if (!resendConfig.apiKey) {
    throw new Error('RESEND_API_KEY is not configured')
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendConfig.apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: data.from || resendConfig.from,
        to: data.to,
        subject: data.subject,
        html: data.html,
        text: data.text,
      }),
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(`Resend API error: ${error.message}`)
    }

    return true
  } catch (error) {
    console.error('Resend email error:', error)
    return false
  }
}

/**
 * Send email using SMTP (fallback)
 */
async function sendWithSMTP(data: EmailData): Promise<boolean> {
  if (!smtpConfig.host || !smtpConfig.auth.user || !smtpConfig.auth.pass) {
    throw new Error('SMTP configuration is incomplete')
  }

  try {
    // Dynamic import to avoid bundling nodemailer in client
    const nodemailer = await import('nodemailer')
    
    const transporter = nodemailer.createTransporter({
      host: smtpConfig.host,
      port: smtpConfig.port,
      secure: smtpConfig.secure,
      auth: smtpConfig.auth,
    })

    const info = await transporter.sendMail({
      from: data.from || resendConfig.from,
      to: data.to,
      subject: data.subject,
      html: data.html,
      text: data.text,
    })

    console.log('SMTP email sent:', info.messageId)
    return true
  } catch (error) {
    console.error('SMTP email error:', error)
    return false
  }
}

/**
 * Send email using the best available method
 */
export async function sendEmail(data: EmailData): Promise<boolean> {
  // Try Resend first (recommended)
  if (resendConfig.apiKey) {
    const success = await sendWithResend(data)
    if (success) return true
  }

  // Fallback to SMTP
  if (smtpConfig.host && smtpConfig.auth.user && smtpConfig.auth.pass) {
    return await sendWithSMTP(data)
  }

  throw new Error('No email service configured. Please set up Resend or SMTP.')
}

/**
 * Send contact form email
 */
export async function sendContactForm(data: {
  name: string
  email: string
  phone?: string
  message: string
}): Promise<boolean> {
  const to = process.env.SITE_EMAIL_TO || 'Menorahenquiries@gmail.com'
  
  const html = `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${data.name}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    ${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ''}
    <p><strong>Message:</strong></p>
    <p>${data.message.replace(/\n/g, '<br>')}</p>
    <hr>
    <p><em>This message was sent from the Menorah Health contact form.</em></p>
  `

  const text = `
    New Contact Form Submission
    
    Name: ${data.name}
    Email: ${data.email}
    ${data.phone ? `Phone: ${data.phone}` : ''}
    Message: ${data.message}
    
    ---
    This message was sent from the Menorah Health contact form.
  `

  return sendEmail({
    to,
    from: resendConfig.from,
    subject: 'New Contact Form Submission - Menorah Health',
    html,
    text,
  })
}

/**
 * Send newsletter subscription confirmation
 */
export async function sendNewsletterConfirmation(email: string): Promise<boolean> {
  const html = `
    <h2>Welcome to Menorah Health Newsletter!</h2>
    <p>Thank you for subscribing to our newsletter. You'll now receive updates about:</p>
    <ul>
      <li>Mental health insights and tips</li>
      <li>Latest app features and updates</li>
      <li>Community stories and support</li>
      <li>Expert advice and resources</li>
    </ul>
    <p>If you have any questions or need support, please don't hesitate to reach out to us.</p>
    <p>Best regards,<br>The Menorah Health Team</p>
    <hr>
    <p><small>You can unsubscribe at any time by clicking the link in our emails.</small></p>
  `

  const text = `
    Welcome to Menorah Health Newsletter!
    
    Thank you for subscribing to our newsletter. You'll now receive updates about:
    - Mental health insights and tips
    - Latest app features and updates
    - Community stories and support
    - Expert advice and resources
    
    If you have any questions or need support, please don't hesitate to reach out to us.
    
    Best regards,
    The Menorah Health Team
    
    ---
    You can unsubscribe at any time by clicking the link in our emails.
  `

  return sendEmail({
    to: email,
    from: resendConfig.from,
    subject: 'Welcome to Menorah Health Newsletter',
    html,
    text,
  })
}

/**
 * Send password reset email (for future use)
 */
export async function sendPasswordReset(email: string, resetToken: string): Promise<boolean> {
  const resetUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/reset-password?token=${resetToken}`
  
  const html = `
    <h2>Password Reset Request</h2>
    <p>You requested a password reset for your Menorah Health account.</p>
    <p>Click the button below to reset your password:</p>
    <a href="${resetUrl}" style="display: inline-block; padding: 12px 24px; background-color: #FFC857; color: white; text-decoration: none; border-radius: 8px;">Reset Password</a>
    <p>If the button doesn't work, copy and paste this link into your browser:</p>
    <p>${resetUrl}</p>
    <p>This link will expire in 1 hour.</p>
    <p>If you didn't request this reset, please ignore this email.</p>
    <hr>
    <p><em>This is an automated message from Menorah Health.</em></p>
  `

  const text = `
    Password Reset Request
    
    You requested a password reset for your Menorah Health account.
    
    Click the link below to reset your password:
    ${resetUrl}
    
    This link will expire in 1 hour.
    
    If you didn't request this reset, please ignore this email.
    
    ---
    This is an automated message from Menorah Health.
  `

  return sendEmail({
    to: email,
    from: resendConfig.from,
    subject: 'Password Reset Request - Menorah Health',
    html,
    text,
  })
}
