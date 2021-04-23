const connection = require("../sql/connection");
// GET// employee by ID 
let getEmployee = function(req, res){;
console.log("Inside the GET employee by ID ")
let sql = "SELECT * FROM employee WHERE ID =?", function (error, rows) {
  // ... 
})

};
//GET// employee by first name 
let getEmployeesByName = function(req, res){
console.log("Inside the GET employee by first name")
let sql = "SELECT * FROM employee WHERE firstname =?", function (error, rows){
  //...
})
};

module.exports = {getEmployee, getEmployeesByName};