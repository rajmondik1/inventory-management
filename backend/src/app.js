var express = require('express');
var cors = require('cors');
var mongoose = require('mongoose');
require('dotenv').config();
var app = express();
var port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
var uri = process.env.MONGODB_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
var connection = mongoose.connection;
connection.once('open', function () {
    console.log('MongoDB connection established successfully');
});
// const exercisesRouter = require('./routes/exercises')
// const usersRouter = require('./routes/users')
//
// app.use('/exercises', exercisesRouter);
// app.use('/users', usersRouter);
app.listen(port, function () {
    console.log('Server is running on port:', port);
});
