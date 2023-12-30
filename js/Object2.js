"user strict"

var user = new Object();//singleton object

// add keys 

user.id = 12;
user.name = "Vivek";
user.age = 19;

console.log(user);

//nesting in objects

const user2 = { fullname: {fistName:"Vivek", LastName:{middle:"no",last:"soni"}}};

console.log(user2.fullname);
console.log(user2.fullname.LastName);
console.log(user2.fullname.LastName.middle);
console.log(user2.fullname.LastName.last);

// combining two object

//wrong method 
const togather = {user,user2};
console.log(togather)//it is putting 2 objects inside another object

// //to combine to objects we use Object.assign(target,source);
// console.log("Assign use");
// console.log(user);
// const sath = Object.assign(user,user2);
// //all the values are put together in target i.e. user and also returned user(target);
// console.log(sath);
// console.log(user);
// //it is changing values in user so good practice is to use another empty object here ;


const sath = Object.assign({},user,user2);
console.log(sath);// all the changes are done in {} empty object which was returned to sath;
console.log(user);//this time user is unchanges 

//but most of the time we will use spread method 
const sathsath = {...user,...user2};
console.log(sathsath);

//to get values or keys of a Object
//return in array
console.log(Object.keys(sathsat));
console.log(Object.values(sathsath));