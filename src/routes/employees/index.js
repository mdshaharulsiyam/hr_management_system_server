const {CreateEmployees, GetAllEmployees, GetsingleEmployees} = require('../../api/employees')

const employeeRoutes = require('express').Router()
employeeRoutes.get('/',GetAllEmployees).post('/',CreateEmployees).get('/:email',GetsingleEmployees)
module.exports = employeeRoutes