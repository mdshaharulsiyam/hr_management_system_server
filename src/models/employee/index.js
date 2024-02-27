const { Schema, model } = require("mongoose");
const bcrypt = require('bcryptjs');
const employeeSchema = new Schema({
    FullName: {
        type: String,
        required: true,
    },
    photo: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    Gender: {
        type: String,
        required: true
    },
    Designation: {
        type: String,
        required: true
    },
    Address: {
        type: String,
        required: true
    },
    Salary: {
        type: Number,
        required: true
    },
    PhoneNumber: {
        type: Number,
        required: true
    },
    leaves: {
        type: Number,
        default: 45
    },
    loan: {
        type: Number,
        default: 0
    },
    JoiningDate: {
        type: Date,
        required: true
    },
    role: {
        type: String,
        default: "employee",
    },
    team: {
        type: String,
        default: "none",
    }
}, { timestamps: true });

const employeeModel = model("employee", employeeSchema);
module.exports = employeeModel;