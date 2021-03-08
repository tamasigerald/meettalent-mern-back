const LocalStrategy = require("passport-local").Strategy;
const crudUser = require("../../business/crudUser");

const registerStrategy = new LocalStrategy(
    {
        usernameField: "email",
        passReqToCallback: true,
    },
    function (req, email, password, done) {
        crudUser
            .createUser(req.body.email, req.body.password)
            .then(function (newUser) {
                done(null, newUser);
            })
            .catch(function (err) {
                done(err);
            });
    }
)


const loginStrategy = new LocalStrategy(
    {
        usernameField: 'email',
        passReqToCallback: true,
    },
    function (req, email, password, done) {
        crudUser.getUserByEmail(req.body.email)
            .then(function (userFound) {
                if (userFound) {
                    if (userFound.checkPassword(req.body.password)) {
                        return done(null, userFound);
                    }
                    else {
                        done(null, false);
                    }
                }
                else {
                    done(null, false);
                }
            })
            .catch(function (err) {
                done(err)
            });
    }
);


module.exports = {
    registerStrategy,
    loginStrategy,
}