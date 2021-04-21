const express = require("express");
const router = express.Router();
const controller = require("../controllers/departmentCtrl");

router.get("/departments", controller.getDepartments);

router.get("/departments/:id", controller.getDepartmentById);

router.get("/departments/:id/managers", controller.getDepartmentManagers);

router.get("/department/:id/employees", controller.getDepartmentEmployees);

module.exports = router;