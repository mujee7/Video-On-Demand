const cors=require('cors')

const validator=require("validator")
const express=require('express')
const app=express();
const Model=require('./Schema.js')

const mongoose=require('mongoose');
const LoginSchema = require('./LoginSchema.js');
mongoose.connect('mongodb://localhost:27017/TapMAD').then(
    console.log('connected')
)
app.use(cors())
app.use(express.json())
app.get('/GetData',async (req,res)=>{
    const data=await Model.find()
    console.log(data)
    res.json({data})
   
})
app.get('/UsersData',async (req,res)=>{
    const data=await LoginSchema.find()
    console.log(data)
    res.json({data})
   
})
app.post('/PostData',async(req,res)=>{
    // console.log(req.body)
    // res.send(req.body)
    const data=await Model.create(req.body)
    res.json({message:'sent'})
})

//For registering Useer
app.post('/RegisterData',async(req,res)=>{
    
    if(!req.body.name || !req.body.password || !req.body.email){
        return res.json({message:"Please Enter all fields"})
   }
    if(!validator.isEmail(req.body.email)){
        return res.json({message:"Invalid Email"})

    }
    
   
    const data=await LoginSchema.create(req.body)
    res.json({data,code:201})
})
//For Login

app.post('/LoginData',async(req,res)=>{
    
    
    if(!validator.isEmail(req.body.email)){
        return res.json({message:"Invalid Email"})

    }
    if(!req.body.password || !req.body.email){
         return res.json({message:"Please Enter all fields"})
    }
   
    const data=await LoginSchema.findOne(req.body)
    if(!data){
        return res.json({message:"no data found"})
    }
    res.json({data,code:202})
})

//single movie with id API
app.get("/SingleMovie/:id",async (req,res)=>{
    try {
        // console.log(req.params)
    // res.send(req.params)
    const movie=await Model.findById(req.params.id)
    if(movie){
        return res.json({movie,code:201})
    }
    res.json({message:"no movie found"})
    } catch (error) {
        res.json({error})
    }
})


app.get('/category/:category',async (req,res)=>{
    try{
    const data=await Model.find({categories:req.params.category})
    console.log(data)
    res.json({data})
    }catch (e){
        console.log(e)
    }
   
})
app.put("/UpdateData/:id",async (req,res)=>{
    console.log(req.body)
   const data =await Model.findByIdAndUpdate(req.params.id,req.body,{
    new:true
   })
   res.json({data})
})
app.delete("/DeleteData/:id",async (req,res)=>{
    
    await Model.findByIdAndDelete(req.params.id).then(
        res.json({message:"deleted data"})
    )
    
 })
 app.delete("/DeleteUserData/:id",async (req,res)=>{
    
    await LoginSchema.findByIdAndDelete(req.params.id).then(
        res.json({message:"deleted data"})
    )
    
 })

app.listen(5000)





