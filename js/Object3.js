const user = {
    name : "Vivek",
    age : 23,
    course: "javaScript",
    courseInstructorName:"Hitesh"
}

//to get any value we have to write like 

const name = user.courseInstructorName;
console.log(name);

// instead we can use DeStructuring of object

const {courseInstructorName} = user;
console.log(courseInstructorName);
//but it has the same name which was in object if you want to change that 

const {courseInstructorName:naam} = user;
console.log(naam);