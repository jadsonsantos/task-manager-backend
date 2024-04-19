const express = require("express");
const connectToDatabase = require("./database/mongoose.database");
const TaskModel = require("./models/task.model");

const app = express();

connectToDatabase();

app.get("/tasks", async (req, res) => {
    const tasks = await TaskModel.find({});

    res.status(200).send(tasks);
});

app.listen(8000, () => console.log("Listening on port 8000"));
