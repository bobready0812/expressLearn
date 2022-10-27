const express = require("express");
const app = express();
const mongoose = require('mongoose');
const url = 'mongodb+srv://sidae9988:tldnjs99^^@cluster1.9kefxyc.mongodb.net/?retryWrites=true&w=majority'
const User = require('./models/User');

mongoose.connect(url).then(() => console.log("DB connected"));

const handleHome = async(req,res) => {
   const users = await User.find({}); //
   return res.render("home", {users});
};

app.get('/', handleHome);
app.get('/join', (req,res) => {res.render("join")});
app.set("view engine", "pug");
app.set("views", process.cwd() + '/views');

app.listen(5000, (req,res) => {
    console.log("Server on");
})
