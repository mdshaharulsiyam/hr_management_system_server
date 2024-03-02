const {CreateEmployees, GetAllEmployees, GetsingleEmployees,GetEmployeeDetails, GetEmployee, handleGethasteamUser} = require('../../api/employees')
const VerifyToken = require('../../utils/Middleware/VerifyToken')

const employeeRoutes = require('express').Router()
employeeRoutes.get('/',VerifyToken,GetAllEmployees).get('/hasteam',VerifyToken,handleGethasteamUser).post('/',VerifyToken,CreateEmployees).get('/login/:email',GetsingleEmployees).get('/details',VerifyToken,GetEmployeeDetails).get('single/:id',VerifyToken,GetEmployee)
module.exports = employeeRoutes