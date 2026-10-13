const express = require('express');


const app = express();
app.use(express.json());

const notes = [];

app.post('/notes', (req,res) => {
    notes.push(req.body);

    res.status(201).json({
        message : "Notes created successfully"
    }) 
})

app.get('/notes', (req,res) => {
    res.status(200).json({
        message : "Notes fetched successfully",
        notes : notes
    })
})

app.delete('/notes/:index', (req,res) => {
    const index = req.params.index;

    delete notes [index]

    res.status(200).json({
        message: "message deleted successfully"
    })
})

app.patch('/notes/:index', (req, res) => {
    const index = req.params.body;
    const description = req.body.description;

    notes [index].description = description;

    res.status(200).json({
        message: "Notes updated successfully",
        message: "Notes 2 is created and updated successfully"
    })
})

module.exports = app;