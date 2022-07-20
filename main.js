const express = require("express");
const app = express();
app.use(express.json());
app.post("/",async(req,res)=>{
    console.log(req.body.name);
    let a = {
        "name":req.body.name
    }
    res.send(a);//ここで送信
})
app.listen(3000,()=>{
    console.log("run");
})

