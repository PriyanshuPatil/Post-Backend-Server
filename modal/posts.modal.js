const mongoose=require("mongoose") ;
const postSchema=mongoose.Schema({
    title : String ,
    body : String ,
    device : String ,
    no_if_comments : Number
},
{versionKey:false});

const postModal=mongoose.model("post",postSchema);
module.exports={postModal}