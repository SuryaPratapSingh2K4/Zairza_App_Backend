const router = require("express").Router();
const TodoController = require('../controller/events.controller')

router.post("/storeEvent", TodoController.createEvent);


module.exports = router;