const { CookieToken, ClearCookie } = require('../../api/authenTication')

const JWTRoutes = require('express').Router()
JWTRoutes.post('/',CookieToken).get('/',ClearCookie)
module.exports = JWTRoutes