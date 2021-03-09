const express = require("express");
const passport = require('passport');

const offerController = require("./controllers/offerController");
const userController = require('./controllers/userController');
const authController = require('./controllers/authControllers');
const candidatesController = require("./controllers/candidateController");

const router = express.Router();



// ---------- LOGIN ROUTE ----------

router.route('/login')
    .post(passport.authenticate('login-local', { session: false }), authController.getToken);

router.route('/login/google')
    .get(passport.authenticate('login-google', { scope: ['profile', 'email'] }));

router.route('/login/google/cb')
    .get(passport.authenticate('login-google', { session: false }), authController.getToken);


// ---------- REGISTER ROUTE ----------

router.route('/register')
    .post(passport.authenticate('register-local', { session: false }), authController.getToken);

router.route('/register/google')
    .get(passport.authenticate('register-google', { scope: ['profile', 'email'] }));

router.route('/register/google/cb')
    .get(passport.authenticate('register-google', { session: false }), authController.getToken);


// ---------- USER ROUTES ----------

router.route('/user')
    .all(authController.verifyToken) // if the user is not authorized it will not go to the next route
    .post(userController.createUser)
    .get(userController.listUsers);

router.route('/user/:id')
    .all(authController.verifyToken)// if the user is not authorized it will not go to the next route
    .get(userController.getUser)
    .put(userController.overwriteUser)
    .patch(userController.modifyUser)
    .delete(userController.deleteUser);

// ---------- OFFER ROUTES ----------

router
    .route("/offers")
    .get(offerController.listOffers)
    .post(offerController.createOffer);


// ---------- CANDIDATES ROUTES ----------

router
    .route("/candidates")
    .get(candidatesController.listCandidates)
    .post(candidatesController.createCandidate);


// router.route("/candidates/:filter").get(candidatesController.filterCandidates);

module.exports = router;
