// models/Note.js

import mongoose from "mongoose";

const NoteSchema = new mongoose.Schema({
  title: String,
  text: String,
});

module.exports =
  mongoose.models && mongoose.models.Note
    ? mongoose.models.Note
    : mongoose.model("Note", NoteSchema);
