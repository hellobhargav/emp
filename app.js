require("./db");
const empRouter = require("./Router/EmployeeRouter")
const express = require("express");
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(cors())

app.use("/employees", empRouter)

app.listen(4000, () => console.log("API is Started"))