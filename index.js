const express = require("express");
const app = express();
const mongoose = require('mongoose');
const url = 'mongodb+srv://sidae9988:tldnjs99^^@cluster1.9kefxyc.mongodb.net/?retryWrites=true&w=majority'
const User = require('./models/User');
const bodyParser = require('body-parser')

mongoose.connect(url).then(() => console.log("DB connected"));

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());



app.listen(5000, (req,res) => {
    console.log("Server on");
})
