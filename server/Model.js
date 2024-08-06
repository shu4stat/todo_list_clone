const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  id: Number,
  content: String,
  status: String,
});

const TodoModel = mongoose.model("todo", todoSchema);

module.exports = TodoModel;
