const employeeModel = require("../../models/employee");
const mailSend = require("../../utils/SendMail")

const CreateEmployees = async (req, res) => {
    const mailData = {
        sender: 'shaharulsiyam0273@gmail.com',
        receiver: 'shaharulsiyam56@gmail.com',
        subject: 'test',
        msg: 'hlw there',
    }
    await mailSend(mailData)
}
const GetAllUserEmployees = async (req, res) => {
    try {
        console.log('link ')
        const result = await employeeModel.find();
        res.send({ success: true, data: result });
    } catch (err) {
        res.send({ success: false, msg: 'unable to get employee data' });
    }
};
module.exports = { CreateEmployees, GetAllUserEmployees }