const express = require("express");

const offerController = require("./controllers/offerController");
const userController = require('./controllers/userController');

const User = require('./models/User');

const router = express.Router();

// ---------- USERS ROUTES ----------

router.route('/user')
    .post(userController.createUser)
    .get(userController.listUsers);

router.route('/user/:id')
    .get(userController.getUser)
    .put(userController.overwriteUser)
    .patch(userController.modifyUser)
    .delete(userController.deleteUser);

// ---------- OFFER ROUTES ----------

router
  .route("/offers")
  .get(offerController.listOffers)
  .post(offerController.createOffer);

module.exports = router;
