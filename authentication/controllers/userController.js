const User = require ("../modules/userModel.js")
const bcrypt = require('bcrypt');
 
 /* const signUp = async (req, res)=>{
    // we will check it the user in the database
    const user = await User.findOne({username:req.body.username});//esitlık saglanıyorsa yada varsa bulur
    //if yes return message
if (user){
    res.send({message: "user already exist"})
}else{
    const newUser = new User(req.body)
    newUser.save()
    console.log(newUser)
    res.send({message:"new user created"})
   
}

    // if no create in the database

    
   
}
 const login = async (req, res)=>{

  //we need to check if username exist

  const user = await User.findOne({username: req.body.username})
  // if yes we will check the password
     // if password true . return the data
     // if password wrong : return wrong password
  if(user){
    if(user.password===req.body.password){
     res.send(user)
    }else{
        res.send({message:"wrong password"})
    }
  }
    //if no return wrong username
  else{
    res.send({message:"user not exist, write true username"})
  }
   

}
 */

//*************************************************/


const signUp = async (req,res)=>{
  // check if username and password exist

 

  if(!req.body.username || !req.body.password){
    

    res.send({message: "please send the data needed"})
   
  }else{
     // we need to hash password
     const user = await User.find({username:req.body.username}) 
     if(user.length){
       res.send({message: "user already exist"})
     }else{
        bcrypt.hash(req.body.password, 10, function(err, hash) {
            console.log("this is our hash", hash)
           //res.send({hash:hash})
          const newUser =  new User({username:req.body.username, password: hash})
          newUser.save()
          res.send({message: "we saved new user !!!!!!!!!!!!!!!!!"})
            // Store hash in your password DB.
        });
     }
    };

  //we need to save user to data base return me saved
   
  
}

const login =  async (req,res)=>{
 const user = await User.findOne({username:req.body.username})
 if(user){
    bcrypt.compare (req.body.password, user.password, function(err, result) {
        if(result){
            res.send({message:true})
        }else{
            res.send({message:false})
        }
       
    });
 }else{
    res.send("wrong username")
 }
}


module.exports =  {
      signUp,
      login,
    
}