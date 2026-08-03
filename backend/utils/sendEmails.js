const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendInquiryEmail = async (inquiry) => {
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER, // Send to yourself
    subject: "New Inquiry Received - Supreme Cryogenic",
    html: `
      <h2>New Inquiry</h2>
      <p><strong>Name:</strong> ${inquiry.name}</p>
      <p><strong>Nationality:</strong> ${inquiry.nationality}</p>
      <p><strong>Email:</strong> ${inquiry.email}</p>
      <p><strong>Phone:</strong> ${inquiry.phone}</p>
      <p><strong>Product:</strong> ${inquiry.product}</p>
      <p><strong>Message:</strong> ${inquiry.message}</p>
    `,
  });
};

module.exports = sendInquiryEmail;