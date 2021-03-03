const express = require("express");

const offerController = require("./controllers/offerController");
const candidatesController = require("./controllers/candidateController");

const router = express.Router();

// ---------- OFFERS ROUTES ----------

router
  .route("/offers")
  .get(offerController.listOffers)
  .post(offerController.createOffer);

// ---------- CANDIDATES ROUTES ----------

router
  .route("/candidates")
  .get(candidatesController.listCandidates)
  .post(candidatesController.createCandidate);

module.exports = router;
