const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.mongo_url);

const connection = mongoose.connection;

connection.on('error', () => {
    console.log("Error connecting to database")
});
connection.on('connected', () => {
    console.log('MongoDB connection is successfull');
});

module.exports = connection;

