//GET EXPRESS
const express = require("express");

//GET AND CONFIGURE .ENV
const dotenv = require("dotenv").config();

const app = express();

//MIDDLEWARE/ BODY PARSER
app.use(express.json());

//PORT CONFIG
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started running at ${PORT}`);
});

const numbers = [1, 3, 7, 42, 99];
const languages = ["JavaScript", "Python", "Java", "C++", "Ruby"];
const tenants = [
  {
    name: "Alice",
    age: 30,
    occupation: "Engineer",
  },
  {
    name: "Bob",
    age: 25,
    occupation: "Designer",
  },
];

//GET REQUEST
app.get("/numbers", (request, response) => {
  response.send(numbers);
});

app.get("/languages", (request, response) => {
  response.send(languages);
});

app.get("/tenants", (request, response) => {
  response.send(tenants);
});

//POST REQUEST
//Account Registration and Validation
app.post("/register", (req, res) => {
    console.log(req.body)
  const { name, age, id } = req.body;

  if (!name) {
    return res.json({ message: "Please name is required" });
  }
  if (!age) {
    return res.json({ message: "Please age is required" });
  }
  if (age < 20) {
    return res.json({ message: "You are underage" });
  }
  if (!id) {
    return res.json({ message: "Please id is required" });
  }

  const newUser = {
    name,
    age,
    id,
  };
  return res.json({ message: "registration successful", newUser });
});

//PUT REQUEST
//Account Login

//Account Reset
