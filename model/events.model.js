const mongoose = require('mongoose');
const mongo_conn = require('../mongoDB/mongo_conn');

const { Schema } = mongoose;

const EventSchema = new Schema({
    SessionName: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    DateAndTime: {
        type: String,
        required: true
    },
    EventImgUrl: {
        type: String,
        required: true
    },
    SeniorInchargeName: {
        type: String,
        required: true
    }
}, );

// const EventModel = db.model('todo', todoSchema);

const EventModel = mongo_conn.model('Event',EventSchema);

module.exports = EventModel;