const mongoose=require('mongoose')
require('dotenv').config();
function connecttodb(){
    mongoose.connect(process.env.DB_URL).then(()=>{console.log("connected to db successfully")}).catch((err)=>{console.error(err)
        process.exit(1);
    })
}
module.exports=connecttodb;