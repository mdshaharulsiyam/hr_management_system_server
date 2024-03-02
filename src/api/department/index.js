const DepartmentModel = require("../../models/department");
const employeeModel = require("../../models/employee");
const { ObjectId } = require("mongodb");
const PostDepartmentData = async (req, res) => {
    try {
        const requestedUser = req.user
        if (requestedUser?.role !== 'admin') {
            return res.status(401).send({ message: "unauthorized access" });
        }
        const Data = req.body;
        await employeeModel.updateOne({ _id: new ObjectId(Data?.head) }, {
            $set: {
                team: 'no team',
                role: ` head of ${Data?.departmentName}`
            }
        })
        const result = await DepartmentModel.create(Data)
        res.send({ success: true, data: result })
    } catch (err) {
        console.log(err)
        res.status(400).send({ success: false, msg: 'unable to create department' });
    }
}
const GetDepartmentData = async (req, res) => {
    try {
        const result = await DepartmentModel.find().populate({
            path: 'head',
        })
        res.send({ success: true, data: result })
    } catch (err) {
        console.log(err)
        res.status(400).send({ success: false, msg: 'unable to get department' });
    }
}
module.exports = { PostDepartmentData, GetDepartmentData }