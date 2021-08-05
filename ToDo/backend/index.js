const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const tasksRoute = require('./routes/taskRoute');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', '*');
    next();
});

app.use(tasksRoute);

mongoose.connect('mongodb+srv://AnuragSingh:7tmuNUInINZn8RCt@cluster0.qqxjc.mongodb.net/task?retryWrites=true&w=majority').then(result => {

    console.log('Connected');
    app.listen(3000);
}).catch(err => {
    console.log(err);
});
