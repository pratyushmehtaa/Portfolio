// netlify/functions/sendMail.js
const nodemailer = require("nodemailer");

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: JSON.stringify({ error: "Method not allowed" }) };
  }

  let payload;
  try {
    payload = JSON.parse(event.body);
  } catch (err) {
    return { statusCode: 400, body: JSON.stringify({ error: "Invalid JSON" }) };
  }

  const { name, email, message } = payload || {};
  if (!name || !email || !message) {
    return { statusCode: 400, body: JSON.stringify({ error: "All fields are required" }) };
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS, // app password
      },
    });

    const html = `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>
    `;

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: "Someone reached you through your portfolio website",
      html,
    });

    return { statusCode: 200, body: JSON.stringify({ success: "Message sent successfully!" }) };
  } catch (error) {
  console.error("Email error details:", error);

  return {
    statusCode: 500,
    body: JSON.stringify({
      error: "Failed to send message",
      details: error.message,   // show the exact error
    }),
  };
}
console.log("GMAIL_USER:", process.env.GMAIL_USER);
console.log("GMAIL_PASS length:", process.env.GMAIL_PASS?.length);


};
