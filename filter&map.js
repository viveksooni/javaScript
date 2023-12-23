
//normal function 
// function sum(a,b)
// {
//     return a+b;
// }

//arrow function 

const sum = (a,b)=>{return a+b;}

console.log(sum(1,3))

//filter
//given an array giveback a new array where every value is multiple of 2

let arr = [1,2,3,4,5];

let ans = arr.filter((n)=>n%2==0)
console.log(ans);

//in given array add one to each element
let ans2 = arr.map((n)=>n+1);
console.log(ans2)