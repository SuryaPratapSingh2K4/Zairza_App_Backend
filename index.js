// require('dotenv').config();
const app = require('./app');
// const express = require("express");
// const bodyparser = require("body-parser");

const PORT = process.env.PORT || 4600;
// const event = require("./events/router_event");
const mongo_conn = require('./mongoDB/mongo_conn');
// const EventModel = require('./model/events.model');

// const app = express();

// app.use(bodyparser.urlencoded({extended: false}));

// app.use("/zairza",event);

// require("./mongoDB/mongo_conn");

app.listen(PORT, (req,res)=>{
    console.log(`Server Running on: Port http://localhost:${PORT}`);
})

app.get("/", (req,res)=>{
    res.send("Welcome to Zairza!")
})