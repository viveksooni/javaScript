let myDate = new Date()

console.log(myDate);
console.log(myDate.toString());
console.log(myDate.getTime());// this return number of millisecond since 1 jan 1970 utc mid night to now
console.log(myDate.toDateString());
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(typeof myDate)// type of date is object

//create your data

let myCreatedDate = new Date(2023,0,26,12,53);// year, month(starts with 0), date , hour, minutes, second
let myCreatedDate1 = new Date("01-01-2022");// can give value in dd-mm-yyy standard also in yyy-mm-dd
// let myCreatedDate1 = new Date("2001-01-22");
let myCreatedDate2 = new Date("2001/01/22");
console.log(myCreatedDate2.toString());

// timeStamps 

let myTimeStamp = Date.now();

console.log(myTimeStamp)

//for converting it into seconds divide it by 1000
console.log(Math.floor(myTimeStamp/1000));

// extracting specific value from new Date

console.log(myDate.getDate());
console.log(myDate.getMonth()+1);// months starts with 0 idx, so we add 1 to give end-user the same result
console.log(myDate.getHours());

//LocalString 

console.log(myDate.toLocaleString('default',{
    timeStyle:"short"
}))// we can customize here like this