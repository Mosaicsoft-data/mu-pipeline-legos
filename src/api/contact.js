import mailgun from 'mailgun.js';  // Import mailgun.js
import formData from 'form-data';   // Import form-data (dependency for mailgun.js)

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Extract form data from the request body
    const { name, email, company, message } = req.body;

    // Initialize Mailgun client
    const mg = new mailgun(formData);  // Create an instance of Mailgun client
    const client = mg.client({ username: 'api', key: process.env.MAILGUN_API_KEY });

    // Create email content using the form data
    const emailContent = `
      Name: ${name}
      Email: ${email}
      Company: ${company || 'Not provided'}
      Message: ${message}
    `;

    // Set up the email parameters
    const emailParams = {
      from: `Mu Pipelines <contact@${process.env.MAILGUN_DOMAIN}>`, // Your Mailgun verified email
      to: 'mupipelines@gmail.com', // Email to send the contact form submissions
      subject: `Contact form submission from ${name}`,
      text: emailContent,
    };

    try {
      // Send the email using Mailgun API
      const response = await client.messages.create(process.env.MAILGUN_DOMAIN, emailParams);
      
      // If successful, respond with a success message
      res.status(200).json({ message: 'Email sent successfully', data: response });
    } catch (error) {
      // Handle any errors and respond with an error message
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Failed to send email. Please try again later.' });
    }
  } else {
    // Respond with a 405 if the method is not POST
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
