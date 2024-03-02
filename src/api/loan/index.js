const { ObjectId } = require("mongodb");
const loan = require("../models/loan");
const userModel = require("../models/user");
const LoanPost = async (req, res) => {
    const data = req.body;
    const result = await loan.create(data)
    res.send({ success: true, msg: "Posted Successfully" })
}
const LoanGet = async (req, res) => {
    const { user } = req.query;
    if (!user) {
        return res.status(501).send({ msg: "something went wrong user not found" })
    }
    try {
        const Requesteduser = await userModel.findOne({ email: user })
        let filter = {}
        if (Requesteduser?.role === 'admin') {
            filter = {}
        } else {
            filter = { user: new ObjectId(Requesteduser?._id) }
        }
        const result = await loan.find(filter).populate({
            path: 'user',
            select: '_id email FullName photo'
        })
        res.send(result)
    } catch (error) {
        console.log(error)
        res.status(501).send({ msg: "something went wrong" })
    }
}
module.exports = { LoanGet, LoanPost }