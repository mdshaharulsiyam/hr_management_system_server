// require("dotenv").config();
const cors = require('cors');
const express = require('express');
const cookieParser = require("cookie-parser");
const { LOCAL_CLIENT, CLIENT } = require("../../config");
const ApplyMiddleWare = (app)=>{
    app.use(cors({
        origin: [
            LOCAL_CLIENT,
            CLIENT,
            'https://gregarious-mandazi-69cbd9.netlify.app','http://localhost:5173/'
        ],
        credentials : true,
        optionsSuccessStatus: 200,
    })),
    app.use(express.json())
    app.use(cookieParser())
}
module.exports = ApplyMiddleWare