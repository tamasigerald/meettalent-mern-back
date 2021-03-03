const express = require("express");

const offerController = require("./controllers/offerController");
const userController = require('./controllers/userController');

const User = require('./models/User');
const bcrypt = require('bcrypt');

const router = express.Router();

// ---------- LOGIN ROUTES ----------

router.route('/login')
    .post(async function(req, res, next) {
      try{
        const foundUser = await User.findOne({email: req.body.email});
        if (foundUser === null) {
          res.status(200).json({ error: 'User not found' });
        }
        else if (await bcrypt.compare(req.body.password, foundUser.password)) {
          res.status(200).json({ error: false, logged: foundUser });
        }
        else {
          res.status(200).json({ error: 'Password incorrect' });
        }
      }
      catch(err) {
        next(err);
      }
    });


// ---------- USER ROUTES ----------

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
