const mongoose = require("mongoose");

const candidateSchema = new mongoose.Schema();

const Candidate = mongoose.model("Candidate", candidateSchema);

module.exports = Candidate;
