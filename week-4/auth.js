const express=require("express");

const app=express();
app.use(express.json());
//api handlear

app.post("/signup", (req,res)=>{
   const username= req.body.username;
   const password= req.body.password
   res.json({
    message:"you suceessfully signup",
    username,
    password
   })


});

app.post("/signin",(req,res)=>{
    const username=req.body.username;
    const password=req.body.password
    res.json({
        message:"YOu sucksesfully signin(hahah)",
    })
})

app.listen(3000)
