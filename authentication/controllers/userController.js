const User = require ("../modules/userModel.js")
const bcrypt = require('bcrypt');
 


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