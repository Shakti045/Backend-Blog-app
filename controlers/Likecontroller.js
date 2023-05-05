const Like=require('../modals/Likepost')
const Post=require('../modals/Blogpost')
exports.likepost=async (req,res)=>{
    try{
       const {post,user}=req.body;
      const likedpost=await Like.create({post,user});
      const updatedpost=await Post.findByIdAndUpdate({_id:post},{$push:{likes:likedpost._id}},{new:true}).populate("likes").exec()
      res.status(200).json({
        "success":true,
        "message":"post liked successfully",
        "post":updatedpost
      })
    }catch(err){
        console.error(err)
        res.status(500).json({
            "Success":false,
            "message":"Something went wrong while liking the post"
        })
    }
}
exports.unlikepost=async (req,res)=>{
    try{
       const {id}=req.body;
       const {post}=await Like.findByIdAndDelete({_id:id})
       await Post.findByIdAndUpdate({_id:post},{$pull:{"likes":id}})
       res.status(200).json({
        "message":"Like removed successfully"
       })
       

    }catch(err){
        console.error(err)
        res.status(500).json({
            "Success":false,
            "message":"Something went wrong while unliking the post"
        })
    }
}