const nodemailer = require("nodemailer");

dotenv.config();

exports.sendMail = async (req, res) => {
  const { to, subject, body } = req.body;

  // let transporter = nodemailer.createTransport({
  //   host: "smtp-mail.outlook.com",
  //   port: 587,
  //   secure: false, // true for 465, false for other ports
  //   auth: {
  //     user: id,
  //     pass: key,
  //   },
  // });

  // let messageBody = {
  //   from: `"User" <${id}>`, // sender address
  //   to: `aravindathisankaran@outlook.com,subash@thetoolnation.com,navin@thetoolnation.com`, // list of receivers
  //   subject: "Web enquiry", // Subject line
  //   text: `${message}`, // plain text body
  //   // html: "<b>Hello from TTN TECHNOLOGIES PVT Ltd</b>", // html body
  // };
  // let mailReponse = await transporter
  //   .sendMail(messageBody)
  //   .then((resp) => {
  //     console.log(resp);
  //     res.status(200).send({ status: true, data: resp });
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //     res.status(500).send({ status: false, data: err });
  //   });

  //   console.log("Message sent: %s", info.messageId);
  //   console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
};
