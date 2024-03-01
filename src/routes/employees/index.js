const {CreateEmployees, GetAllEmployees, GetsingleEmployees,GetEmployeeDetails, GetEmployee} = require('../../api/employees')
const VerifyToken = require('../../utils/Middleware/VerifyToken')

const employeeRoutes = require('express').Router()
employeeRoutes.get('/',GetAllEmployees).post('/',CreateEmployees).get('/login/:email',GetsingleEmployees).get('/details',VerifyToken,GetEmployeeDetails).get('/:id',VerifyToken,GetEmployee)
module.exports = employeeRoutes