const express = require("express");
const app = express();
const port = 5000;
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/Express",{useNewUrlParser:true});

const db = mongoose.connection;

const handleOpen = () => console.log("Connected to DB");

db.on("error", (error) => console.log("DB Error", error));
db.once("open", handleOpen);

app.get('/',(req,res) => res.send("Hello world!"));

app.listen(port, () => console.log(`Example app listening on port ${port}`));  