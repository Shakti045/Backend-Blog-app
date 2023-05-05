const express=require('express')
const router=express.Router();
const {createpost,getallpost}=require('../controlers/Postcontroller')
const {likepost,unlikepost}=require('../controlers/Likecontroller');
const {commentpost,deletecomment}=require('../controlers/Commentcontroller');
router.post("/createpost",createpost);
router.get("/getallpost",getallpost);
router.post("/like",likepost);
router.delete("/unlike",unlikepost);
router.post("/comment",commentpost);
router.delete("/deletecomment",deletecomment);
module.exports=router;
