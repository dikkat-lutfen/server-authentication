
const Todo = require( "../modules/todoModel.js")





const createTodo =  (req, res)=>{

    // console.log(req.body)
    const newTodo = new Todo(req.body)
    newTodo.save();
     res.send({todo: "new todo is saved to database"})
 }


const getTodos = async (req, res)=>{
    const todos = await Todo.find({}).populate("owner");
    res.send(todos)
}




module.exports = {
    getTodos,
    createTodo,
  
}