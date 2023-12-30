// "use strict"
// //will use newer version

const accId = 12323423;
var name = "Vivek";
let first = "second";
let num = 234;
let a;
// we prefer using "let" and avoid using "var" because of block scope and functional scope;

console.table([accId,name,first,num,a]);

/* data types in js
    number ( 2^53 range )
    bigInt
    string 
    boolean
    null // is a object(debateable)
    undefined
    symbol
_________________

    objects
*/

console.log(typeof null);
console.log(typeof num);
console.log(typeof undefined);

//______________________________________

//conversion of variables 

console.log("conversion of number");
let string = "33abc";
let converted = Number(string);

console.log(converted);
console.log(typeof converted)

// "33" => 33
// "33abc" => NaN(not a number) its data type is "Number"


// comparison

console.log("\nComparison");

console.log(null>0);//false; because 0>0 ;
console.log(null==0);//false; not changes data type
console.log(null>=0);//true because comparisons(>,>=,<,<=) changes data type of null to 0
console.log("\n");
console.log(undefined>0);
console.log(undefined==0);
console.log(undefined>=0);
console.log(Number(undefined));


//String 

console.log("String interpolation");

const naam = "Vivek";

console.log(`My name is ${naam}`);// string interpolation

const s =  new String("Vivek");
//string is object
console.log(s[0]);
console.log(s.__proto__);
console.log(s.toUpperCase())
;
console.log(s);

const num1 = new Number(100.624);

console.log(num1)
console.log(num1.toFixed(2));
console.log(num1.toPrecision(3));