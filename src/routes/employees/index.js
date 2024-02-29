const {CreateEmployees, GetAllEmployees, GetsingleEmployees,GetEmployeeDetails} = require('../../api/employees')
const VerifyToken = require('../../utils/Middleware/VerifyToken')

const employeeRoutes = require('express').Router()
employeeRoutes.get('/',GetAllEmployees).post('/',CreateEmployees).get('/login/:email',GetsingleEmployees).get('/details',VerifyToken,GetEmployeeDetails)
module.exports = employeeRoutes