const express = require('express');
const bugsRouter = require('./routes/bugs');
const errorHandler = require('./middleware/errorHandler');
const app = express();
app.use(express.json());
app.use('/api/bugs', bugsRouter);
app.use(errorHandler);
module.exports = app;
