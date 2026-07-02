import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function getSmtpConfig() {
  const user = process.env.SMTP_EMAIL?.trim();
  const pass = process.env.SMTP_PASSWORD?.trim();
  const host = process.env.SMTP_HOST?.trim() || "smtp.gmail.com";
  const port = Number(process.env.SMTP_PORT || 465);
  const secure = process.env.SMTP_SECURE !== "false";
  const to = process.env.CONTACT_TO_EMAIL?.trim() || user;

  return { user, pass, host, port, secure, to };
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(String(email))) {
    return res.status(400).json({ error: "Please enter a valid email address." });
  }

  const smtp = getSmtpConfig();

  if (!smtp.user || !smtp.pass) {
    console.error("Contact API: SMTP_EMAIL or SMTP_PASSWORD is not configured.");
    return res.status(503).json({
      error:
        "Email service is not configured. Add SMTP_EMAIL and SMTP_PASSWORD to .env.local.",
      code: "SMTP_NOT_CONFIGURED",
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: smtp.host,
      port: smtp.port,
      secure: smtp.secure,
      auth: {
        user: smtp.user,
        pass: smtp.pass,
      },
    });

    await transporter.verify();

    await transporter.sendMail({
      from: `"Portfolio Contact" <${smtp.user}>`,
      to: smtp.to,
      replyTo: String(email),
      subject: `Portfolio contact from ${name}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${escapeHtml(String(name))}</p>
        <p><strong>Email:</strong> ${escapeHtml(String(email))}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(String(message)).replace(/\n/g, "<br />")}</p>
      `,
    });

    return res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    const err = error as { code?: string; message?: string };
    console.error("Email Sending Failed", error);

    if (err.code === "EAUTH") {
      return res.status(500).json({
        error:
          "Email authentication failed. For Gmail, use an App Password (not your regular password) in SMTP_PASSWORD.",
        code: "SMTP_AUTH_FAILED",
      });
    }

    return res.status(500).json({
      error: "Failed to send email. Please try again later or email me directly.",
      code: "SMTP_SEND_FAILED",
    });
  }
}
