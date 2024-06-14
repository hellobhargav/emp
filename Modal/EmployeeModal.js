const Mongoose = require("mongoose")

const employeeSchema = new Mongoose.Schema({
    name: String,
    email: String,
    mobile: Number,
    role: String,
    salary: Number,
    branch: String
})

module.exports = Mongoose.model("employees", employeeSchema)