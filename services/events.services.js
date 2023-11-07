const EventModel = require('../model/events.model');

class EventServices{

    static async CreateEvent(Session_name,description,Date_and_time,Event_img_url,Senior_incharge_name){
        const CreateEventDetails = new EventModel({Session_name,description,Date_and_time,Event_img_url,Senior_incharge_name});
        return await CreateEventDetails.save();
    }

}

module.exports = EventServices;