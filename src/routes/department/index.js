const { PostDepartmentData, GetDepartmentData } = require('../../api/department')
const VerifyToken = require('../../utils/Middleware/VerifyToken')

const DepartmentRout = require('express').Router()
DepartmentRout.post('/',VerifyToken,PostDepartmentData ).get('/',GetDepartmentData)
module.exports = DepartmentRout