import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name, email, service, message } = await request.json();

    // Basic validation
    if (!name || !email || !message) {
      return Response.json(
        { error: 'Name, email and message are required.' },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `[Portfolio] New enquiry from ${name}${service ? ` — ${service}` : ''}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #0f0f0f; color: #f0f0f0; border-radius: 12px;">
          <h2 style="color: #a78bfa; margin: 0 0 24px;">New Project Enquiry</h2>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; color: #888; width: 120px; vertical-align: top;">Name</td>
              <td style="padding: 10px 0; color: #f0f0f0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #888; vertical-align: top;">Email</td>
              <td style="padding: 10px 0;">
                <a href="mailto:${email}" style="color: #a78bfa;">${email}</a>
              </td>
            </tr>
            ${service ? `
            <tr>
              <td style="padding: 10px 0; color: #888; vertical-align: top;">Service</td>
              <td style="padding: 10px 0; color: #f0f0f0;">${service}</td>
            </tr>` : ''}
            <tr>
              <td style="padding: 10px 0; color: #888; vertical-align: top;">Message</td>
              <td style="padding: 10px 0; color: #f0f0f0; white-space: pre-line;">${message}</td>
            </tr>
          </table>

          <hr style="border: none; border-top: 1px solid #222; margin: 24px 0;" />
          <p style="color: #555; font-size: 12px; margin: 0;">
            Sent from your portfolio contact form · Reply directly to this email to respond to ${name}.
          </p>
        </div>
      `,
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error('[Contact API]', err);
    return Response.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
