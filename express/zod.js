const express = require("express");
const zod = require("zod");

const app = express();

const schema = zod.array(zod.number());//array of numbers

const schema1 = zod
app.use(express.json());

app.post('/checkup',(req,res)=>{

    let kidney = req.body.kidney;
    let response = schema.safeParse(kidney);
    if(!response.success)
    {
        res.status(411).json({msg:"invalid input"});
    }
    else
    {
        res.status(200).json({msg:"good good"});
    }
    // res.json({response});
    let totalKidney = kidney.length;

    console.log(`total number of kidney are ${totalKidney}`);
})
app.get('/', (req,res)=>{
    res.send("Hospital");
})

app.listen(3000,()=>{console.log("server is running at 8080")});

// const schema = zod.string().regex(new RegExp(".+@.+\.com"));

// str = "vivek@dev.com";

// let response = schema.safeParse(str);

// console.log(response);