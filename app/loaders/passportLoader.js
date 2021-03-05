const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const crudUser = require("../business/crudUser");

function passportLoader(app) {

    passport.use('register-local', new LocalStrategy({
            usernameField: 'email',
            passReqToCallback: true,

        },
        function (req, email, password, done) {
            crudUser.createUser(req.body.email, req.body.password)
                .then(function (newUser) {
                    done(null, newUser);
                })
                .catch(function (err) {
                    done(err);
                });


        }
    ));


    passport.use('login-local', new LocalStrategy(function (username, password, done) {
        done(null, false); // No se ha logrado
        done(null, user); // Si se ha logrado
        done(new Error());


    }));

    app.use(passport.initialize());

}

module.exports = passportLoader;