const mongoose = require("mongoose")

// mongoose.connect(process.env.MONGO_URL, {
//     useNewUrlParser: true,
//     UseUnifiedTopology: true
// }).then(()=>console.log("MongoDB Connected!")).catch((err)=>console.log("Error: "+err));

const connection = mongoose.createConnection('mongodb://127.0.0.1:27017/Zairza').on('open',()=>{
    console.log("MongoDB connected");
}).on('error',()=>{
    console.log("MongoDB connection error");
});

module.exports = connection;