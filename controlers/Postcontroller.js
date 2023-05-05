const Post=require('../modals/Blogpost')
exports.createpost=async (req,res)=>{
    try{
        let {title,body,createdby}=req.body;
         const newpost=new Post({
            title,body,createdby
         });
        let updatedpost= await newpost.save()
        res.status(200).json({
            "Success":true,
            "message":"Post successfully created",
            "post":updatedpost
        })
    }catch(err){
        console.error(err)
        res.status(500).json({
            "Success":false,
            "message":"Something went wrong while creating post"
        })
    }
}


exports.getallpost=async (req,res)=>{
    try{
       let posts=await Post.find().populate("likes").populate("comments").exec();
       res.status(200).json({
        "message":"Data fetched successfully",
        "posta":posts
       })
    }catch(err){
        console.error(err)
        res.status(500).json({
            "Success":false,
            "message":"Something went wrong while fetching all posts"
        })
    }
}