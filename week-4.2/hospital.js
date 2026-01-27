const express =require("express");
const app=express();
const user=[{
    name:"jhon",
    kidneys:[{
        healthy:false
    }]
}]
app.use(express.json());
app.get("/", function(req,res){
    const jhonkidneys=user[0].kidneys;
    const numberofkidneys=jhonkidneys.length;
    let numberofhealthykidneys=0;
    for(let i=0; i<jhonkidneys.length; i++){
        if(jhonkidneys[i].healthy){
            numberofhealthykidneys=numberofhealthykidneys+1;
        }
    }
    const numberofunhealthykidneys =numberofkidneys-numberofhealthykidneys;
    res.json({
        numberofkidneys,
        numberofhealthykidneys,
        numberofunhealthykidneys
    })
})

app.post("/",function(req, res){
    const ishealthy= req.body.ishealthy;
    user[0].kidneys.push({
        healthy:ishealthy
    })
    res.json({
        msg:done
    })
})
app.put("/",function(req, res){
    for(let i=0; i<user[0].kidneys.length; i++){
        user[0].kidneys[i].healthy=true;
    }
    res.json({});
})

app.listen(3000);