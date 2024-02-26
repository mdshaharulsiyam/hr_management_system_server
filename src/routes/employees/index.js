const {CreateEmployees} = require('../../api/employees')

const employeeRoutes = require('express').Router()
employeeRoutes.get('/',CreateEmployees)
module.exports = employeeRoutes