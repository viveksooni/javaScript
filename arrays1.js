const { all } = require("express/lib/application");

const arr = [1,3,4,5,6,true,"hello"]; // array are shallow copies not deep copies, they point to same references;
console.log(arr);

//second method of declaration
const arr1 = new Array(1,3,4,6,5);

console.log(arr1);
console.log(typeof arr);

arr1.push(10);
arr1.push("Vivek");
console.log(arr1);
arr1.pop()
console.log(arr1);

arr1.unshift("top");// inserts a new element at the start of the array
console.log(arr1);
console.log(arr1.includes("top"))
arr1.shift();// it removes the first element of the array
console.log(arr1);

const myName = ["Vivek","Shreya","Ram","Shyam"]
myName.push(1)
console.log(myName.includes("Shyam"))

const newArray = myName.join("-")//make array a string based on parameter
console.log(newArray)
console.log(typeof newArray)

//slice, splice


//slicing 
const name = myName.slice(1,3);//starting and ending index are parameter, ending index is exclusive
console.log(myName)
console.log(name)

//splice

//in this one ending index is inclusive, but it also refelect changes on the orginal array it remove starting indx and ending index from original array

const spliceName = myName.splice(1,3)
console.log(myName)//op>> Vivek, 1
console.log(spliceName)//op>> shreya, ram, shyam

//mixing two arrays
console.log("____________________________________________")
const marvel = ["ironMan","Hulk","spiderMan"];
const dc = ["superman","batman","wonderwoman"];

marvel.push(dc);//it adds dc as an array in marvel
console.log(marvel);
marvel.pop();
//concat function
const allHeros = marvel.concat(dc)//it will work fine but there is something better
console.log(allHeros);

const newAllHeros = [...marvel,...dc]//... spread the values, give all the values as a single single

console.log(newAllHeros)

const anArray = [1,3,[4,32],[3,4,5,[4,4]]]
console.log(anArray);
console.log(anArray.flat(Infinity));//flaten the array to the depth provided in parameter

console.log(Array.from("VivekSoni"))//make array from value provided
console.log(Array.from(123455));
console.log(Array.from({name:"vivek"}))//have to specify for which want to create array key or value

console.log(Array.of(marvel,dc));//returns array of values on variabale defined
