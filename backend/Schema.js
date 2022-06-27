const mongoose=require('mongoose')
const moviesSchema=new mongoose.Schema({
name:{
    type:String,
    required:true
},
image:{
    type:String,
    required:true
},
bannerimage:{
    type:String,
    require:true
},
description:{
    type:String,
    required:true
},
categories:{
    type:String,
    required:true
},
episodes:[
    {
        episodeNumber:{
            type:Number,

        },
        image:{
            type:String
        }
    }
],
video:{
    type:String,
    
}

})

module.exports=mongoose.model('MoviesSchema',moviesSchema)

