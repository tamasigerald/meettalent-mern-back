const express = require("express");
const passport = require('passport');

const offerController = require("./controllers/offerController");
const userController = require('./controllers/userController');
const authController = require('./controllers/authControllers');



const router = express.Router();



// ---------- LOGIN ROUTE ----------

router.route('/login')
    .post(passport.authenticate('login-local', { session: false }), authController.getToken); // si el login ha ido correctamente te da opcion a coger el token


// ---------- REGISTER ROUTE ----------
router.route('/register')
    .post(passport.authenticate('register-local', { session: false }), authController.getToken);






// ---------- USER ROUTES ----------

router.route('/user')
    .all(authController.verifyToken) // si el usuario no esta autorizado no pasara a la siguiente ruta
    .post(userController.createUser)
    .get(userController.listUsers);

router.route('/user/:id')
    .all(authController.verifyToken)// si el usuario no esta autorizado no pasara a la siguiente ruta
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
