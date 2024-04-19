const dotenv = require("dotenv");
const express = require("express");
const connectToDatabase = require("./database/mongoose.database");

dotenv.config();
const app = express();

connectToDatabase();

app.get("/tasks", (req, res) => {
    const tasks = [{ description: "Estudar programação", isCompleted: false }];

    res.status(200).send(tasks);
});

app.listen(8000, () => console.log("Listening on port 8000"));
