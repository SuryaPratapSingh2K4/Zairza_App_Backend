require('dotenv').config();
const express = require("express")
const bodyparser = require("body-parser")
const PORT = process.env.PORT || 4600
const event = require("./events/router_event")

const app = express();

app.use(bodyparser.urlencoded({extended: false}));

app.use("/zairza",event);

require("./mongoDB/mongo_conn");

app.listen(PORT, (req,res)=>{
    console.log("Server Running on: "+PORT);
})

app.get("/", (req,res)=>{
    res.send("Welcome to Zairza!")
})