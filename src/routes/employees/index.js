const {CreateEmployees, GetAllUserEmployees} = require('../../api/employees')

const employeeRoutes = require('express').Router()
employeeRoutes.get('/',GetAllUserEmployees).post('/',CreateEmployees)
module.exports = employeeRoutes