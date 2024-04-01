const employeeModel = require("../../models/employee");
const mailSend = require("../../utils/SendMail")
const bcrypt = require('bcryptjs');
// create employe 
const CreateEmployees = async (req, res) => {
    // const {employeeEmail} = req.query;        //    <a href="${employeeEmail}"></a>
    try {
        const  requestedUser  = req.user
        if (requestedUser?.role !== 'admin') {
            return res.status(401).send({ message: "unauthorized access" });
        }
        const data = req.body
        const password = data.password
        const salt = await bcrypt.genSalt(10);
        const hash_pass = await bcrypt.hash(password, salt);
        data.password = hash_pass
        const result = await employeeModel.create(data)
        const mailData = {
            sender: 'shaharulsiyam0273@gmail.com',
            receiver: `${data?.email}`,
            subject: 'Welcome to our - Your New Employee Information',
            msg: `<body style="font-family: Arial, sans-serif; line-height: 1.6; margin: 20px; color: #555;">
                <p>Dear ${data.FullName},</p>
            
                <p>We are thrilled to welcome you to the [Company Name] team! Your contribution and skills will undoubtedly play a key role in our success.</p>
            
                <h3 style="color: #333;">Employee Details:</h3>
                <ul style="list-style-type: none; padding: 0;">
                    <li style="margin-bottom: 10px;"><strong>Employee email:</strong> ${data.email}</li>
                    <li style="margin-bottom: 10px;"><strong>password:</strong> ${password}</li>
                </ul>
            
                <p>We're excited to have you on board, and we look forward to working together!</p>
            
                <p>Best regards,<br>
                   company name<br>
        
                </p>
            </body>`,
        }
        await mailSend(mailData)
        res.send({ success: true, data: result });

    } catch (err) {
        console.log(err)
        res.status(400).send({ success: false, msg: 'unable to create employee data' });
    }

}
//login
const GetsingleEmployees = async (req, res) => {
    try {
        const { email } = req.params;
        const { password } = req.query;
        const result = await employeeModel.findOne({ email: email });
        bcrypt.compare(password, result?.password, function (err, ismatch) {
            if (ismatch) {
                res.send({ success: true, data: result });
            } else {
                res.status(400).send({ success: false, msg: "password doesn't match" });
            }
        });
    } catch (err) {
        res.status(400).send({ success: false, msg: 'unable to get employee data' });
    }
};
// get employee 
const GetEmployeeDetails = async (req, res) => {
    try {
        const tokenemail = req.user?.email;
        const { email } = req.query;
        if (email !== tokenemail) {
            return res.status(401).send({ message: "unauthorized access" });
        }
        const result = await employeeModel.findOne({ email: email });
        res.send({ success: true, data: result });
    } catch (err) {
        res.status(400).send({ success: false, msg: 'unable to get employee data' });
    }
}
// get all employee
const GetAllEmployees = async (req, res) => {
    try {
        // const requestedUser = req.user
        // if (requestedUser?.role !== 'admin') {
        //     return res.status(401).send({ message: "unauthorized access" });
        // }
        // console.log(requestedUser?.role)
        const result = await employeeModel.find();
        res.send({ success: true, data: result });
    } catch (err) {
        res.status(400).send({ success: false, msg: 'unable to get employee data' });
    }
};
const GetEmployee = async (req, res) => {
    try {
        const role = req.user?.role;
        if (!role || role !== 'admin') {
            return res.status(401).send({ message: "unauthorized access" });
        }
        const id = req.params.id;
        const result = await employeeModel.findOne({ _id: new ObjectId(id) });
        res.send({ success: true, data: result });
    } catch (err) {
        res.status(400).send({ success: false, msg: 'unable to get employee data' });
    }
};
const handleGethasteamUser = async (req, res) => {
    const requestedUser = req.user
    if (requestedUser?.role !== 'admin') {
        return res.status(401).send({ message: "unauthorized access" });
    }
    const result = await employeeModel.find({ team: 'none' });
    return res.send(result);
};
module.exports = { CreateEmployees, GetAllEmployees, GetsingleEmployees, GetEmployeeDetails, GetEmployee, handleGethasteamUser }