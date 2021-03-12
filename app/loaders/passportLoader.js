const passport = require("passport");

const localStrategies = require('./strategies/localStrategyLoader');
const googleStrategy = require('./strategies/googleStrategyLoader');



function passportLoader(app) {
    passport.use("register-local", localStrategies.registerStrategy);

    passport.use('login-local', localStrategies.loginStrategy);

    passport.use("register-google", googleStrategy.registerStrategy);

    passport.use('login-google', googleStrategy.loginStrategy);

    app.use(passport.initialize());
}

module.exports = passportLoader;
