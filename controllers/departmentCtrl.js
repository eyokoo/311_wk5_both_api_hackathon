const connection = require("../sql/connection");

// GET // list of departments 
let getDepartments = function(){
console.log("Inside the GET - Departments ")
connections.query("SELECT * FROM departments", function (error, rows) {

})

};

// GET // list of department by ID
let getDepartmentById = function(req, res){
console.log("Inside the GET Departments by ID ")
let sql = "SELECT * FROM departments, WHERE id = ?"


};


// GET // dept managers by first name, last name, id, dates active
let getDepartmentManagers = function(req, res){
console.log("Inside the GET Dept managers by FN, LN, ID and DA ")
//.join(table,relation[,direction])
"SELECT "
let sql = "SELECT employee firstname, lastname, id dates active FROM managers WHERE department id =?"

};

//GET//  dept employees by dept ID
let getDepartmentEmployees = function(req, res){
console.log("Inside the GET Dept employees by ID ")

//.join(table,relation[,direction])
let sql = "SELECT employees, FROM deparments WHERE department id =?"

};


module.exports = {getDepartments, getDepartmentById, getDepartmentManagers, getDepartmentEmployees};