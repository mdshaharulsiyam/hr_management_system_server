const { Schema, model } = require("mongoose");
const Departmentshcema = new Schema({
    'departmentName': {
        type: String,
        required: true,
    },
    'head': {
        type: Schema.Types.ObjectId,
        ref: 'employee',
        required: true,
    },
    'description': {
        type: String,
        required: true,
    },
    'Totalteam': {
        type: Number,
        default: 0
    },

})
const DepartmentModel = model('department', Departmentshcema)
module.exports = DepartmentModel