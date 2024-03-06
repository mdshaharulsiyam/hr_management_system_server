require("dotenv").config();
const express = require('express');
const ApplyMiddleWare = require("./src/utils/Middleware/ApplyMiddleware");
const GlobalErrorHandeler = require("./src/utils/GlobalErrorHandeler/GlobalErrorHandeler");
const ConnectionDB = require("./src/utils/DB_connection");
const employeeRoutes = require("./src/routes/employees");
const JWTRoutes = require("./src/routes/JWT");
const DepartmentRout = require("./src/routes/department");
const teamRoute = require("./src/routes/team");
const app = express()
const port = process.env.PORT || 5000;
ApplyMiddleWare(app)


app.use('/employe',employeeRoutes)
app.use('/jwt',JWTRoutes)
app.use('/department',DepartmentRout)
// app.use("/holidays", holidayroutes);
// app.use("/loan", loanRoutes);
// app.use('/course', courseRoutes)
// app.use("/projects", projectRoute);
app.use("/team", teamRoute);
// app.use("/leave", leaveRoutes);
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