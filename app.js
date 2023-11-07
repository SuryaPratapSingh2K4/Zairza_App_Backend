const express = require('express');
const body_parser = require('body-parser');
const EventRouter = require('./routers/events.router');

const app = express();

app.use(body_parser.json());

app.use('/',EventRouter);

module.exports = app;