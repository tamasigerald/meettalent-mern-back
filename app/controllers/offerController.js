const { ConnectionStates } = require("mongoose");
const Offer = require("../models/Offer");

async function listOffers(req, res) {
  try {
    const offersList = await Offer.find();
    res.json({ results: offersList });
  } catch (err) {
    res.json({ error: "Error al consultar la base de datos" });
  }
}

async function editOfferStatus(req, res) {
  try {
    const offer = await Offer.findById(req.body._id);
    offer.status = req.body.status;
    await offer.save();
    res.json({message: 'Updated!'});
  } catch (error) {
    res.json({error: error});
  }
}

async function createOffer(req, res) {
  try {
    const newOffer = new Offer();
    // newOffer = req.body;
    // newOffer.releaseDate = req.body.releaseDate;
    newOffer.releaseDate = new Date();
    newOffer.title = req.body.title;
    newOffer.location = req.body.location;
    newOffer.language = req.body.language;
    newOffer.country = req.body.country;
    newOffer.vacancyNum = req.body.vacancyNum;
    // newOffer.registered = req.body.registered;
    newOffer.inProcess = req.body.inProcess;
    newOffer.finalists = req.body.finalists;
    newOffer.companyName = req.body.companyName;
    newOffer.companyId = req.body.companyId;
    newOffer.candidates = req.body.candidates;
    newOffer.status = req.body.status;
    newOffer.sector = req.body.sector;
    newOffer.educationRequired = req.body.educationRequired;
    newOffer.description = req.body.description;
    newOffer.candidateRequirements = req.body.candidateRequirements;
    newOffer.availabilityRequired = req.body.availabilityRequired;
    newOffer.salary = req.body.salary;
    newOffer.workingDay = req.body.workingDay;
    newOffer.contractType = req.body.contractType;
    newOffer.keyWords = req.body.keyWords;
    newOffer.save();
    res.json({ saved: true });
  } catch (err) {
    res.json({ saved: false });
  }
}

module.exports = {
  listOffers,
  createOffer,
  editOfferStatus
};
