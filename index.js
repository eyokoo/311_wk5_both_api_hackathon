const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(require("./routes/departments"));
app.use(require("./routes/employees"));

const port = 4000;

app.listen(port, function(){
  console.log("Listening to the port! ", port);
})