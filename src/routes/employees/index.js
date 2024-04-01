const {CreateEmployees, GetAllEmployees, GetsingleEmployees,GetEmployeeDetails, GetEmployee, handleGethasteamUser} = require('../../api/employees')
const VerifyToken = require('../../utils/Middleware/VerifyToken')

const employeeRoutes = require('express').Router()
employeeRoutes.get('/employe',GetAllEmployees).get('/employe/hasteam',VerifyToken,handleGethasteamUser).post('/employe',VerifyToken,CreateEmployees).get('/employe/login/:email',GetsingleEmployees).get('/employe/details',VerifyToken,GetEmployeeDetails).get('/employe/single/:id',VerifyToken,GetEmployee)
module.exports = employeeRoutes