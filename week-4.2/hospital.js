const express =require("express");
const app=express();
const user=[{
    name:"jhon",
    kidneys:[{
        healthy:false
    }]
}]
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

app.listen(3000);