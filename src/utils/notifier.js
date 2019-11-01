import { EMAIL, PASSWORD } from "babel-dotenv";
const nodemailer = require("nodemailer");
import { default as logger } from "./logger";

async function notifyByEmail(type, message) {
  try {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
        user: EMAIL,
        pass: PASSWORD
      }
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: `"A-Bot 👻" <${EMAIL}>`, // sender address
      to: ["cryptabot@gmail.com"], // list of receivers
      subject: `${type} ✔`, // Subject line
      text: `${JSON.stringify(message)}` // plain text body
      //html: "<b>Hello world?</b>" // html body
    });

    logger.info("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@gmail.com>
  } catch (error) {
    console.error(error.message);
  }
}

module.exports = {
  sendEmail
};
