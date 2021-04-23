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
let sql = `SELECT
employees.emp_no,
employees.first_name,
employees.last_name,
dept_manager.from_date,
dept_manager.to_date
FROM dept_manager
JOIN employees
ON dept_manager.emp_no = employees.emp_no
WHERE dept_manager.dept_no = ?
ORDER BY dept_manager.from_date ASC;`

};

//GET//  dept employees by dept ID
let getDepartmentEmployees = function(req, res){
console.log("Inside the GET Dept employees by ID ")

//.join(table,relation[,direction])
let sql = `SELECT
employees.emp_no,
employees.first_name,
employees.last_name,
dept_emp.from_date,
dept_emp.to_date
FROM dept_emp
JOIN employees
ON dept_emp.emp_no = employees.emp_no
WHERE dept_emp.dept_no = ?
ORDER BY dept_emp.from_date ASC;`

let params = [];
params.push(req.params.id);

connection.query(sql, params, function(error, rows){
  if(error){
    console.error('Error when getting dpt employees', error);
    res.sendStatus(500)
  } else if (rows.length == 0) {
    console.error('Dept has no employees or Dept does not exist')
    res.sendStatus(404)
  }
  res.json(rows);
})
};


module.exports = {getDepartments, getDepartmentById, getDepartmentManagers, getDepartmentEmployees};