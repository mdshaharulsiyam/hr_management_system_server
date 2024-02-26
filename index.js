require("dotenv").config();
const express = require('express');
const ApplyMiddleWare = require("./src/utils/Middleware/ApplyMiddleware");
const GlobalErrorHandeler = require("./src/utils/GlobalErrorHandeler/GlobalErrorHandeler");
const ConnectionDB = require("./src/utils/DB_connection");
const app = express()
const port = process.env.PORT || 5000;
ApplyMiddleWare(app)


app.get('/', (req, res) => {
    res.json('HR management server is running....')
})
app.all('*', (req, res, next) => {
    const error = new Error(`can't find ${req.originalUrl} in the server`)
    error.status = 400
    next(error)
})
app.use(GlobalErrorHandeler)
const main = async () => {
    await ConnectionDB()
    app.listen(port, () => {
        console.log(`CareerHunt Server is running on port ${port}`);
    })
}
main()