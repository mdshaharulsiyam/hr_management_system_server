const mailSend = require("../../utils/SendMail")

const CreateEmployees = async (req, res) => {
    const mailData = {
        sender:'shaharulsiyam0273@gmail.com',
        receiver:'shaharulsiyam56@gmail.com',
        subject:'test',
        msg:'hlw there',
    }
    await mailSend(mailData)
}
module.exports = { CreateEmployees }