import type { NextApiRequest, NextApiResponse } from 'next';
import mailgun from 'mailgun-js';

const mg = mailgun({
  apiKey: process.env.MAILGUN_API_KEY!,
  domain: process.env.MAILGUN_DOMAIN!,
});

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, company, message } = req.body;

  const emailContent = `
    Name: ${name}
    Email: ${email}
    Company: ${company || 'Not provided'}
    Message: ${message}
  `;

  const data = {
    from: `Mu-Pipelines Contact <contact@${process.env.MAILGUN_DOMAIN}>`,
    to: process.env.EMAIL_RECEIVER!,
    subject: `New contact from ${name}`,
    text: emailContent,
  };

  mg.messages().send(data, (error, body) => {
    if (error) {
      console.error('Mailgun Error:', error);
      return res.status(500).json({ success: false, error: 'Failed to send email' });
    }
    res.status(200).json({ success: true, message: 'Email sent successfully' });
  });
}
