const todoController = require ("../controllers/todoController");
const router = require ("express").Router();


router.get("/",  todoController.getTodos );
router.post("/create",  todoController.createTodo );


module.exports =router;