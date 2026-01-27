const express=require("express");


function calculatesum(n) {
    let ans=0; 
    for(let i=1; i<=n; i++){
        ans=ans+i;
    }
    return ans;
    
}


const app= express();

app.get("/", function(req, res){
   const n=req.query.n;
   const ans=calculatesum(n)
    res.send("Your number is "+ans);
})



app.listen(3000)