const jwt = require('jsonwebtoken')
const { ACCES_TOKEN } = require("../../config");

const GenarateToken = async(userData)=>{
    const token =await jwt.sign(userData, ACCES_TOKEN,{ expiresIn: '10h' });
    return token;
}
module.exports = GenarateToken