const mongoose = require('mongoose');

db = mongoose.connect("mongodb+srv://sonivivek346:jZm30KVr5TBWfzfG@admin.yzz8rok.mongodb.net/vivek");

const User = mongoose.model('Users',{name: String, email: String, password: String});


const user = new User({
    name : "Vivek Soni",
    email : "sonivivek@gmail.com",
    password : "12345"
})
;

user.save().then((res)=>{console.log(res)});
