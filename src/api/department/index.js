const DepartmentModel = require("../../models/department");

const PostDepartmentData = async (req, res) => {
    try {
        const { requestedUser } = req.user
        if (requestedUser?.role !== 'admin') {
            return res.status(401).send({ message: "unauthorized access" });
        }
        const Data = req.body;
        const result = await DepartmentModel.create(Data)
        res.send({ success: true, data: result })
    } catch (error) {
        console.log(err)
        res.status(400).send({ success: false, msg: 'unable to create department' });
    }
}
const GetDepartmentData = async (req, res) => {
    try {
        const result = await DepartmentModel.find()
        res.send({ success: true, data: result })
    } catch (error) {
        console.log(err)
        res.status(400).send({ success: false, msg: 'unable to create department' });
    }
}
module.exports = { PostDepartmentData ,GetDepartmentData}