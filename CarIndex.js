const express = require('express');
const logger = require('morgan');
const carRoute = require('./route/carMainRoute');

const app = express();
app.use(express.json());
app.use(logger('dev'));

app.use("/carMainRoute", carRoute);

app.use((req, res)=>
res.status(404).send("Declare Error: Can't find the page or page is not existing"));

module.exports = app; 


