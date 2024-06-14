let express = require("express");
let router = express.Router();
let employees = require("../Modal/EmployeeModal")

router.post("/", async (req, res) => {
    let employee = new employees(req.body);
    let result = await employee.save();
    res.send(result)
})

router.get("/", async (req, res) => {
    let result = await employees.find()
    if (result.length > 0) {
        res.send(result)
    }
    else {
        res.send({ result: "No data found" })
    }
})


router.delete("/:_id", async (req, res) => {
    let query = { _id: req.params._id }
    let result = await employees.deleteOne(query)
    res.send(result)

})


// Reading One Record
router.get("/:_id", async (req, res) => {
    let query = { _id: req.params._id }
    let result = await employees.findOne(query)
    res.send(result)
})

router.put("/:_id", async (req, res) => {
    let query = { _id: req.params._id }
    let newValue = { $set: req.body }
    let result = await employees.updateOne(query, newValue)
    res.send(result)
})


module.exports = router