const mongoose = require("mongoose");

const offerSchema = new mongoose.Schema(
  {
    releaseDate: {
      type: Date,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    language: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    vacancyNum: {
      type: Number,
      required: true,
      min: 1,
    },
    // registered:
    inProcess: [
      {
        type: mongoose.SchemaTypes.ObjectId,
      },
    ],
    finalists: [
      {
        type: mongoose.SchemaTypes.ObjectId,
      },
    ],
    companyName: String,
    companyId: mongoose.SchemaTypes.ObjectId,
    candidates: [
      {
        type: mongoose.SchemaTypes.ObjectId,
      },
    ],
    status: {
      type: Boolean,
      required: true
     
    },
    sector: String,
    educationRequired: String,
    description: String,
    candidateRequirements: String,
    availabilityRequired: String,
    salary: String,
    workingDay: String,
    contractType: String,
    keyWords: [
      {
        type: String,
      },
    ],
  },
  {
    collection: "offers",
  }
);

const Offer = mongoose.model("Offer", offerSchema);

module.exports = Offer;
