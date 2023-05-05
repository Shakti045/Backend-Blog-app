const mongoose=require('mongoose')
const Comentschema=mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post"
    },
    user:{
        type:String,
        require:true,
    },
    comment:{
        type:String,
        require:true,
    }
})
module.exports=mongoose.model("Comment",Comentschema);