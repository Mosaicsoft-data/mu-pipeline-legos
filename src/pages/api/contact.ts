// /app/api/contact/route.ts (Next.js 13+ using App Router)
export async function POST(req: Request) {
  const { name, email, message, company } = await req.json();

  const MAILGUN_DOMAIN = process.env.MAILGUN_DOMAIN!;
  const MAILGUN_API_KEY = process.env.MAILGUN_API_KEY!;
  const MAILGUN_FROM_EMAIL = process.env.EMAIL_RECEIVER!;

  const formData = new URLSearchParams();
  formData.append("from", `Mu Pipelines <${MAILGUN_FROM_EMAIL}>`);
  formData.append("to", "mupipelines@gmail.com");
  formData.append("subject", `Contact from ${name}`);
  formData.append("text", `Name: ${name}\nEmail: ${email}\nCompany: ${company || 'Not provided'}\nMessage: ${message}`);

  const response = await fetch(`https://api.mailgun.net/v3${MAILGUN_DOMAIN}/messages`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(`api:${MAILGUN_API_KEY}`).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: formData.toString(),
  });

  if (!response.ok) {
    const text = await response.text();
    console.error("Mailgun error:", text);
    return new Response("Failed to send email", { status: 500 });
  }

  return new Response("Email sent successfully", { status: 200 });
}
