require("dotenv").config();
const jwt = require('jsonwebtoken');
const { ACCES_TOKEN } = require("../../config");
const VerifyToken = async (req, res,next) => {
    const token = req?.cookies?.token;
    if (!token) {
        return res.status(401).send({ message: "unauthorized access" });
    }
    jwt.verify(token, ACCES_TOKEN, (err, decoded) => {
        if (err) {
            return res.status(401).send({ message: "unauthorized access" });
        }
        req.user = decoded;
        next();
    });

}
module.exports = VerifyToken