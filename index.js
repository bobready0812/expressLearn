const express = require("express");
const app = express();
const mongoose = require('mongoose');
const url = 'mongodb+srv://sidae9988:tldnjs99^^@cluster1.9kefxyc.mongodb.net/?retryWrites=true&w=majority'
const User = require('./models/User');
const bodyParser = require('body-parser')

mongoose.connect(url).then(() => console.log("DB connected"));

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

const handleHome = async(req,res) => {
   const users = await User.find({}); 
   console.log(users);                              
   return res.render("home", {users});
};

const postJoin = async(req,res) => {
    const {email , name , password} = req.body;
    await User.create({
        email,        
        name,
        password
    })
    res.redirect("/");
}


app.get('/', handleHome);
app.get('/join', (req,res) => {res.render("join")});
app.post('/join', postJoin);
app.set("view engine", "pug");
app.set("views", process.cwd() + '/views');

app.listen(5000, (req,res) => {
    console.log("Server on");
})
