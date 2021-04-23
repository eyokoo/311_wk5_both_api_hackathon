const express = require("express");
const router = express.Router();
const controller = require("../controllers/employeeCtrl");

router.get("/employee/:id", controller.getEmployee);

router.get("/employee/name/:firstName", controller.getEmployeesByName);

module.exports = router;