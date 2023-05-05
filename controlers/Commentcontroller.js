const Comment=require('../modals/Comment')
const Post=require("../modals/Blogpost")
exports.commentpost=async (req,res)=>{
    try{
      const {post,user,comment}=req.body;
      const newcomment=new Comment({
        post,user,comment
      })
      const commentedpost=await newcomment.save();
      const updatedpost=await Post.findByIdAndUpdate({_id:post},{$push:{comments:commentedpost._id}}).populate("comments").exec();
      res.status(200).json({
        "Success":true,
        "message":"Commented successfully",
        "post":updatedpost
      })
    }catch(err){
        console.error(err)
        res.status(500).json({
            "Success":false,
            "message":"Something went wrong while commenting on the  post"
        })
    }
}
exports.deletecomment=async(req,res)=>{
    try{
        let {id}=req.body;
        const {post}=await Comment.findByIdAndDelete({_id:id})
        await Post.findByIdAndUpdate({_id:post},{$pull:{"comments":id}})
        res.status(200).json({
            "message":"comment deleted successfully"
        })

    }catch(err){
        console.error(err)
        res.status(500).json({
            "Success":false,
            "message":"Something went wrong while deleting comment"
        })
    }
}