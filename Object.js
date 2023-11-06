//singelton 
//Object.create()

//object literal
const sym = Symbol("hello")

let users = {
    name:"Vivek",
    "full name": "Vivek soni",
    [sym]:"herer",//symbol
    email:"vivek@gmail.com",
    age : 24,
    location : "Kanpur"
}

//how to access the values
//there are two method

// first method which is common
// #1

console.log(users.name);
console.log(users.age);

//another method
// #2
console.log(users["name"])
console.log(users["location"])//they should be inside double quotes ""

// this access method is important for accessing like full name in this example which can not be accessed thru normal method 
// console.log(user.full name) (can't access like this)

console.log(users["full name"]);

// console.log(users.sym);//but its type is not symbol
// console.log(typeof users.sym);

//for making use of symbols first we need to change its key in obj then to access it we will use 2nd method but without "" qoutes

console.log(users[sym]);
console.log(typeof users[sym]);

//freeze ( after freezing an object we can not make any change populate in that object, means it will not give error but it will also not refelect any changes)
// users.age = 100;
// Object.freeze(users);
// users.age = 15;
// console.log(users);


// In javaScript functions are used as normal variables

users.greetings = function(){
    console.log("hello js user");
}
users.greetings1 = function(){
    console.log(`hello js use ${this["full name"]}`);
}

console.log(users.greetings())
;
console.log(users.greetings1());

