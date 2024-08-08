const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  content: String,
  status: String,
});
todoSchema.path("_id");
const TodoModel = mongoose.model("todo", todoSchema);

module.exports = TodoModel;
7777;
