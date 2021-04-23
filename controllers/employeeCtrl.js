const connection = require("../sql/connection");
// GET// employee by ID 
let getEmployee = function(req, res){;
console.log("Inside the GET employee by ID ")
let id = req.params.id
let sql = "SELECT * FROM employees WHERE emp_no =?"
connection.query(sql, [id], (error, rows) => {
  console.log("ROWS:", rows)
  if(error){
    console.error("failed to query the db", error);
    res.sendStatus(500);
  }else if (!rows || rows.length == 0){
    res.sendStatus(404);
  }else {
    res.send(rows[0]);
  }
})

};

//GET// employee by firstname 
let getEmployeesByName = function(req, res){
console.log("Inside the GET employee by firstname")
let firstname = req.params.firstname

let sql = "SELECT * FROM employees WHERE first_name = ?"
connection.query(sql, [firstname], (error, rows) => {
  console.log("ROWS:", rows)
  if(error){
    console.error("failed to query the db", error);
    res.sendStatus(500);
  }else if (!rows || rows.length == 0){
    res.sendStatus(404);
  }else {
    res.send(rows[0]);
  }
})
};

module.exports = {getEmployee, getEmployeesByName};