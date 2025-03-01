require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const port = 3003;

async function start() {
    const app = express();
    
    mongoose.set('strictQuery', false);     
    await mongoose.connect(process.env.MONGO_CONNECTION_STRING);

    app.listen(3003, () => {
        console.log(`<=== Server listening on port ${process.env.EXPRESS_SERVER_PORT} ===>`);
    });
};

start();