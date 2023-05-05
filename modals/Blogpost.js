const mongoose=require('mongoose')
const Postschema=mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    body:{
        type:String,
        require:true
    },
    createdby:{
        type:String,
        require:true,
        default:"Unknown user"
    },
    createdon:{
        type:Date,
        require:true,
        default:Date.now()
    },
    likes:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Like"
    }],
    comments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Comment"
    }]
})

module.exports=mongoose.model("Post",Postschema)