const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const app = express()
const userRouter = require ("./routers/userRoute.js")
const todoRouter= require("./routers/todoRoute.js")
 

const User = require ("./modules/userModel.js")
const port=3005;


app.use(bodyParser.json());
app.use(
    cors( 
         {origin:"*"})
);

app.use("/user", userRouter);
app.use("/todo", todoRouter)
 

app.listen(port,()=>{
console.log("app is running port :"+ port)
})