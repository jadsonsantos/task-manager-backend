const { config } = require("dotenv");
const mongoose = require("mongoose");

config();

const DB_CONNECTION_STRING = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@taskmanagercluster.oi0vhvd.mongodb.net/?retryWrites=true&w=majority`;

const connectToDatabase = async () => {
    try {
        await mongoose.connect(DB_CONNECTION_STRING);
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Error connecting to the database: ", error);
    }
};

module.exports = connectToDatabase;
