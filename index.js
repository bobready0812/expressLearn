const express = require("express");
const app = express();
const mongoose = require('mongoose');
const url = 'mongodb+srv://sidae9988:tldnjs99^^@cluster1.9kefxyc.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(url).then(() => console.log("DB connected"));

app.get('/', (req,res) => {res.send("HI")});

app.listen(5000, (req,res) => {
    console.log("Server on");
})
