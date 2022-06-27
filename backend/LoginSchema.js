const mongoose=require('mongoose')
const LoginSchema=new mongoose.Schema({
name:{
    type:String,
    required:true
},


email:{
    type:String,
    trim:true,
    required:true
},
password:{
    type:String,
    required:true
},
role:{
    type:String,
    default:"user"
}


})

module.exports=mongoose.model('Login',LoginSchema)

