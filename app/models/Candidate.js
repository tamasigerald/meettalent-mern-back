const mongoose = require("mongoose");

const candidateSchema = new mongoose.Schema({
  name: String,
  surname: String,
  email: String,
  avatar: String,
  age: Number,
  rol: String,
  phone: String,
  city: String,
  keyWords: {
    creativity: Boolean,
    uxui: Boolean,
    sketch: Boolean,
    projects: Boolean,
    empathy: Boolean,
    html: Boolean,
  },
});

const Candidate = mongoose.model("Candidate", candidateSchema);

module.exports = Candidate;
