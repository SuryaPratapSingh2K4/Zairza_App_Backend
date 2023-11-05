const mongoose = require("mongoose")

const eventSchema = new mongoose.Schema({
    title: String,
    date_and_time: String,
    event_img: String,
    description: String,
    senior_incharge: String
});

module.exports = mongoose.model("event", eventSchema);

