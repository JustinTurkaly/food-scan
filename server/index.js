const express = require("express");
const path = require("path");
const { addUser } = require('./controllers.js');


let port = 1128;

const app = express();

app.use(express.json());

//New User
app.post('/user', addUser)

app.listen(port, function () {
  console.log(`listening on port ${port}`);
});