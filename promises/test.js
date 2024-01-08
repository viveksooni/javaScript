//promise object represent the eventual compeletion or failure of asyncronus operation and its resulting value
const promiseOne = new Promise((resolve,reject)=>{

    //Any async call
    //like DB call
    //network
    //reading file

    setTimeout(()=>{
        console.log("asycn is done");
        resolve();
    },1000)
})

promiseOne.then(()=>{
    //then is affiliated with resolve
    console.log("promise resolved");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("hello");
        resolve();
    },1000);
}).then(()=>{
    console.log("hello resolved");
})

//passing data from promise

const promiseThree = new Promise(function(resolve,reject){
    
    setTimeout(function(){
        console.log("data passing");
        resolve("helllo");//passing data as parameter
        
    },1000)
})

promiseThree.then((str)=>{console.log(str)});//getting data as argument of the .then();


const promiseFour = new Promise((resolve,reject)=>{

    setTimeout(() => {
        
        console.log("asyn 2");

        resolve({username:"viveksoni",email:"sonivivek346@gmail.com"})
        
    }, 2000);
})

promiseFour
.then((userDetails)=>{
    console.log(userDetails);
    return userDetails.username;
})
.then((name)=>{//this is callback chaining, it is taking argument from prev call back
    console.log(name);
})


//promise have .then() , .catch() , .finally()

const promiseFive = new Promise((resolve,reject)=>{

    setTimeout(() => {
        error = true;
        if(!error)
       { 
        console.log("asyn call 5");
        resolve()
        }
        else
        {
            reject("ERROR: do somthing or your pc will self-distruct");
        }
    }, 1000);
})

promiseFive.then(()=>{
    console.log("promise is passed")
}).catch((err)=>console.log(err)).finally(()=>{
    console.log("promise is either resolved or rejected")
});

const promiseSix = new Promise(function(resolve,reject)
{
    setTimeout(()=>{
        error = true;
    if(!error)
    {
        resolve({name:"vivek",company:"wipro"});
    }
    else
    {
        reject("ERROR: something went wrong");
    }
    },1000)
})

//using async await

async function resolvePromiseSix()
{
    
    try{
        response = await promiseSix;
        console.log(response)
    }
    catch(err)
    {
        console.log(err);//error is handled grace fully
    }
}

resolvePromiseSix();


(async ()=>{
    try{
        response = await fetch("https://dummyjson.com/products/1");
        const dat =await response.json();
        console.log(dat);
    }
    catch(err)
    {
        console.log(err);
    }
})();//IIFE(immediatiely invoked function expression)


fetch("https://dummyjson.com/products/1")
.then((res)=>{
    return res.json();
})
.then((res)=>console.log(res));
