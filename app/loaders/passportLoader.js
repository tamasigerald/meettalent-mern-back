const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

function passportLoader(app) {

    passport.use('register-local', new LocalStrategy(function (username, password, done) {
        done(null, false); // No se ha logrado
        done(null, user); // Si se ha logrado
        done(new Error());


    }));

    
    passport.use('login-local', new LocalStrategy(function (username, password, done) {
        done(null, false); // No se ha logrado
        done(null, user); // Si se ha logrado
        done(new Error());


    }));

    app.use(passport.initialize());

}

module.exports = passportLoader;