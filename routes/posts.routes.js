const express=require("express");
const postRouter=express.Router();
const {postModal}=require("../modal/posts.modal")
postRouter.get("/",async(req,res)=>{
    const {user}=req.body ;
    const quaries=req.query ;
  
 try{
    let postdata ;
    if(quaries.device=="Mobile" || quaries.device=="Laptop" ){
    postdata=await postModal.find({user,device:quaries.device}) ;    
    }else if((quaries.device1=="Mobile" && quaries.device2=="Laptop" ) || (quaries.device2=="Mobile" && quaries.device1=="Laptop" ) ){
        postdata=await postModal.find({user,device:quaries.device}) ;    
        }
    else {
        postdata=await postModal.find({user}) ;    
    }
res.send(postdata)
}catch(err){
    res.send({"msg":err.message})
}

})

postRouter.patch("/:update",async(req,res)=>{
    const params=req.params.update;
 try{
let postdata=await postModal.findByIdAndUpdate({_id:params},req.body) ;
postdata.save() ;
res.send({"msg":"Succesfully Updated"})
}catch(err){
    res.send({"msg":err.message})
}

})
postRouter.post("/",async(req,res)=>{
 try{
let postdata=new postModal(req.body) ;
postdata.save() ;
res.send({"msg":"Succesfully added"})
}catch(err){
    res.send({"msg":err.message})
}

})
postRouter.delete("/:id",async(req,res)=>{
    const params=req.params.id;
 try{
let postdata=await postModal.findByIdAndDelete(params) ;
postdata.save() ;
res.send({"msg":"Succesfully delited"})
}catch(err){
    res.send({"msg":err.message})
}

})
module.exports={postRouter} ;


// title ==> String
// body ==> String
// device ==> String
// no_if_comments ==> Number

// {"title":"post1" ,
// "body" :"hello i am post 1" ,
// "device":"Mobile" ,
// "no_if_comments" :99 
// }