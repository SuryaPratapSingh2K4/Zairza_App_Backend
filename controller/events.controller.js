const EventServices = require('../services/events.services');

exports.createEvent = async (req, res, next) => {

    try {
        const { SessionName, description, DateAndTime,  EventImgUrl, SeniorInchargeName } = req.body;

        let Events = await EventServices.CreateEvent(SessionName, description, DateAndTime,  EventImgUrl, SeniorInchargeName);

        res.json({ status: true, success: Events });
    } catch (error) {
        next(error);
    }
}