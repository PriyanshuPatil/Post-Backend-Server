const mongoose=require("mongoose") ;
const usersSchema=mongoose.Schema({
    name : String,
    email: String,
    gender : String,
    password: String,
    age :Number,
    city : String 
},
{versionKey:false});

const usersModal=mongoose.model("user",usersSchema) ;
module.exports={usersModal}