import express from 'express';
import serverless from 'serverless-http';
import mailgun from 'mailgun.js';  // Import mailgun.js
import formData from 'form-data';   // Import form-data

const app = express();
app.use(express.json());

app.post('/contact', async (req, res) => {
  const { name, email, company, message } = req.body;

  const mg = mailgun(formData);
  const client = mg.client({ username: 'api', key: process.env.MAILGUN_API_KEY });

  const emailContent = `
    Name: ${name}
    Email: ${email}
    Company: ${company || 'Not provided'}
    Message: ${message}
  `;

  const emailParams = {
    from: `Mu Pipelines <contact@${process.env.MAILGUN_DOMAIN}>`,
    to: 'mupipelines@gmail.com',
    subject: `Contact form submission from ${name}`,
    text: emailContent,
  };

  try {
    const response = await client.messages.create(process.env.MAILGUN_DOMAIN, emailParams);
    res.status(200).json({ message: 'Email sent successfully', data: response });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email. Please try again later.' });
  }
});

export default serverless(app);
