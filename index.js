const {connection}=require("./db");
const {postRouter} =require("./routes/posts.routes") ;
const {usersRouter} =require("./routes/users.routes");
const {Authenticator}=require("./middleware/authentication.middleware")
const express=require("express") ;
const cors=require("cors")
require("dotenv").config()
const app=express();

// middleware
app.use(cors())
app.use(express.json());
app.use("/users",usersRouter)
app.use(Authenticator)
app.use("/posts",postRouter)


//routes
app.get("/",(req,res)=>{
res.send("Home-Page")
})

//port information
app.listen(process.env.port,async()=>{
try{
    await connection ;
    console.log("connected to DB")
}catch(err){
    console.log(err.message)
}
console.log(`application running at ${process.env.port}`)
})