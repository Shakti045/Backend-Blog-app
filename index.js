const express=require('express')
const App=express();
const connecttodb=require('./config/database')
const router=require('./routes/Postroute')
App.use(express.json())
require('dotenv').config()
const PORT=process.env.PORT || 4000
App.listen(PORT,()=>{
    console.log(`Server started on port number ${PORT}`);
})
App.use("/api/v1",router)
connecttodb();
App.get("/",(req,res)=>{
    res.send("<h1>BLOG APP SERVER STARTED</h1>")
})