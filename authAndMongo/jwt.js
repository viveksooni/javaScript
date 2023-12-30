const jwt = require('jsonwebtoken');

const pass = "1234";

const token = jwt.sign({
    name:"vivek",
    password: "123455",
    mob :123234234
},pass);

// console.log(token);
console.log(jwt.verify(token,pass));
let res = jwt.decode(token);
console.log(res);