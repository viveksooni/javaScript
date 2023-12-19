const express = require('express');

const app = express();
let user = [{
            userName:"Vivek",
            kidney:[{healthy:true},{healthy:true},{healthy:false}]
        }
        ]

app.use(express.json());

app.get('/',(req,res)=>{
    
    const name = user[0].userName;
    let Kidneis = user[0].kidney;
    let totalKidney = Kidneis.length;

    let healthyKidney = 0;
    for(let i=0;i<totalKidney;i++)
    {
        if(Kidneis[i].healthy)
        {
            healthyKidney++;
        }
        
    }
    let unhealthyKidneies = totalKidney-healthyKidney;
    res.json({totalKidney,healthyKidney,unhealthyKidneies});
    
})


app.post('/',(req,res)=>{
    
    let kidne = req.body.healthy;
   
    const userKidney = user[0].kidney;
    userKidney.push({healthy:kidne});
    console.log(userKidney);
    res.json({msg:'done'});
})

//put request : make every kindney healthy

app.put("/",(req,res)=>{
    const kidney = user[0].kidney;

    for(let i=0;i<kidney.length;i++)
    {
        kidney[i] = {healthy:true};
    }
    res.json({msg:"done ji"});
})

//remove : remove all the unhealthy kindnies

app.delete('/',(req,res)=>{
    let newKidney = [];
    let kidney = user[0].kidney;
    for(let i=0;i<kidney.length;i++)
    {
        if(kidney[i].healthy)
        {
            newKidney.push(kidney[i]);
        }
    }
    console.log(newKidney);
    user[0].kidney = newKidney;
    res.json({msg:"removed all unhealthy kidnies"})
})
app.listen(3000,()=>console.log("listening at 3000...."));