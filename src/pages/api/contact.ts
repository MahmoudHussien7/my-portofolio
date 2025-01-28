import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  console.log("Received Request Body:", req.body); // Debugging

  const { name, email, message } = req.body || {}; // Prevent undefined values

  if (!name || !email || !message) {
    console.error("Validation Failed - Missing Fields", req.body);
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail", // Use "gmail" or another SMTP service
      auth: {
        user: process.env.SMTP_EMAIL, // Set in .env.local
        pass: process.env.SMTP_PASSWORD, // Set in .env.local
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_EMAIL,
      to: "Mahmoudhu37@gmail.com", // Replace with your actual email
      subject: "New Contact Form Submission",
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Email Sending Failed", error);
    return res.status(500).json({ error: "Failed to send email." });
  }
}
