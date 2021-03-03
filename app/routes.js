const express = require("express");

const offerController = require("./controllers/offerController");

const router = express.Router();

// ---------- OFFER ROUTES ----------

router
  .route("/offers")
  .get(offerController.listOffers)
  .post(offerController.createOffer);

module.exports = router;
