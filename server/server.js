const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const TodoModel = require("./Model.js");

const app = express();
app.use(express.json());
app.use(cors());

//connect to mongodb

require("dotenv").config();
ConnectPromise = mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("MongoDB Connected"))
  .catch((error) => {
    console.log("Failed to connecct to MongoDB");
    console.log(error);
  });

//route

// app.get("/", async (req, res) => {
//   await ConnectPromise;
// });

app.post("/createTodo", async (req, res) => {
  // console.log(req.body);
  const todo = req.body;
  const newTodo = new TodoModel(todo);
  await newTodo.save();
  res.json(todo);
  console.log(todo);
});

app.post("/CompleteTodo", async (req, res) => {
  const todo = req.body;
  TodoModel.findOneAndUpdate({ _id: todo.id }, { status: todo.status });
});
app.get("/getTodos", async (req, res) => {
  await ConnectPromise;
  let todoPromise = TodoModel.find({});
  return todoPromise
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.json();
    });
});

app.listen(3001, () => {
  console.log("listening on port 3001");
});
