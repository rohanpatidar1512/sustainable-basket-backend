const nodemailer = require("nodemailer");
const asyncHandler = require("express-async-handler");

const sendEmail = asyncHandler(async(data, req, res)=>{
  let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: process.env.MAIL_ID,
          pass: process.env.MP,
        },
      });

    let info = await transporter.sendMail({
        from: '"Hey 👻" <abc@gmail.com>', // sender address
        to: data.to, // list of receivers
        subject: data.subject, // Subject line
        text: data.text, // plain text body
        html: data.html, // html body
});
    console.log("Message send: %s", info.messageId);
    console.log("Preview URL : %s",nodemailer.getTestMessageUrl(info))
})
module.exports = sendEmail;