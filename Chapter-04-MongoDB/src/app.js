const express = require("express");
const noteModel = require("./models/note.model");

const app = express();
app.use(express.json());

app.post("/notes", async (req, res) => {
  const data = req.body;
  await noteModel.create({
    title: data.title,
    description: data.description,
  });
  res.status(201).json({
    message: "Note is created",
  });
});

app.get("/notes", async (req, res) => {
  // const notes = await noteModel.find() // find always return array means []

  const notes = await noteModel.findOne({
    title: "test_title",
  });

  // find method returns [{},{}] or []
  // findOne method returns {} or []

  res.status(200).json({
    message: "Notes fetched successfully",
    notes: notes, // this line means send notes as it is
  });
});

app.delete("/notes/:id", async (req, res) => {
  const id = req.params.id;

  await nodeModel.findOneByIdAndDelete({
    _id: id,
  });

  res.status(200).json({
    message: "Note deleted successfully",
  });
});

app.patch("/notes/:id", async (req, res) => {
  const id = req.params.id;
  const description = req.body.description;

  await noteModel.findOneAndUpdate(
    {
      _id: id,
    },
    {
      description: description,
    },
  );
  res.status(200).json({
    message: "Notes update successfully",
  });
});

module.exports = app;
