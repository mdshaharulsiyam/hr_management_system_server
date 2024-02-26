const nodemailer = require('nodemailer')
const { USER_EMAIL, USER_PASS } = require('../../config')
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: USER_EMAIL,
        pass: USER_PASS,
    },
})
const mailSend = async (mailData) => {
    const mailOptions = {
        from: mailData.sender,
        to: mailData.receiver,
        subject: mailData.subject,
        text: mailData.msg,
    };
    const info = await transporter.sendMail(mailOptions)
    console.log(info)
}
module.exports = mailSend