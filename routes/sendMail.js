const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

const sendEmail = async (email, subject, html) => {
  // host = "smtp-relay.sendinblue.com";
  // host = "smtp.gmail.com";
  // port = 587;
  // user = process.env.USER;
  // pass = process.env.SECRET;
  // email = "barry.mitchell000@gmail.com";
  console.log(
    process.env.HOST,
    process.env.MAIL_PORT,
    process.env.USER,
    process.env.SECRET
  );
  const smtpTransport = nodemailer.createTransport({
    host: process.env.HOST,
    port: process.env.MAIL_PORT || 587,
    auth: {
      user: process.env.USER,
      pass: process.env.SECRET,
    },
  });

  const mailResult = await smtpTransport.sendMail({
    from: process.env.USER,
    to: email,
    subject: subject,
    // text: text,
    html: html,
  });

  return mailResult;
};

module.exports = sendEmail;
