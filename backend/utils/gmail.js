import nodemailer from "nodemailer";

export const gmail = async ({ name, email, message, phone }) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
  const mailOptions = {
    from: email,
    to: process.env.TO_EMAIL,
    subject: `new Portfolio inquiry from ${name}`,
    text: `
       📬 New submission from your portfolio:
       Name : ${name}
Email : ${email}
Message : ${message}
PhoneNo : ${phone}
    `,
  };
  await transporter.sendMail(mailOptions);
};
