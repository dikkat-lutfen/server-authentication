
const mongoose = require("./connection.js")

const TodoSchema = new mongoose.Schema({
    todoBody: String,
    owner:{ type:mongoose.SchemaTypes.ObjectId, ref:"User"},
  });

const Todo = mongoose.model('Todo', TodoSchema);

module.exports = Todo;