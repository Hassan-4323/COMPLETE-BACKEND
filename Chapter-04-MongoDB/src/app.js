const express = require("express");
const noteModel = require("./models/note.model");

const app = express();
app.use(express.json);


app.post("/notes", async (req, res) => {
    const data = req.body
    await noteModel.create({
        title : data.title,
        description: data.description
    });
    res.send(201).json({
        message : "Note is created"
    })
});

app.get('/notes', async (req,res) => {
    // const notes = await noteModel.find() // find always return array means []

    const notes = await noteModel.findOne({
        title : "test_title"
    })

    // find method returns [{},{}] or []
    // findOne method returns {} or []

    res.status(200).json({
        message : "Notes fetched successfully",
        notes : notes // this line means send notes as it is
    })
})

module.exports = app;
