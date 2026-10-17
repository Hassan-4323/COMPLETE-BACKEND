const mongoose = require('mongoose')

async function connectDB() {
    await mongoose.connect('mongodb+srv://backend-mongo:SmartThinking4323@complete-backend.pz9xlnc.mongodb.net/halley');

    console.log("Connected to DB");
}

module.exports = connectDB;