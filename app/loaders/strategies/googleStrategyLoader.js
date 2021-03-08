const GoogleStrategy = require("passport-google-oauth20").Strategy;

const crudUser = require('../../business/crudUser');
const config = require('../../config');

const registerStrategy = new GoogleStrategy(
    {
        clientID: config.passport.google.clientID,
        clientSecret: config.passport.google.clienteSecret,
        callbackURL: config.passport.google.registerCallbackURL,

    },
    async function (accessToken, refreshToken, profile, done) {
        const username = profile.name.givenName + ' ' + profile.name.familyName;
        const email = profile.emails[0].value;
        const social = profile.id;
        crudUser.createUser(username, email, undefined, social)
            .then(function (newUser) {
                done(null, newUser);
            })
            .catch(function (err) {
                done(err);
            });
    }

);

const loginStrategy = new GoogleStrategy(
    {
        clientID: config.passport.google.clientID,
        clientSecret: config.passport.google.clienteSecret,
        callbackURL: config.passport.google.registerCallbackURL,
    },
    async function (accessToken, refreshToken, profile, done) {
        crudUser.getUserBySocialId(profile.id)
            .then(function (user) {
                if (user === null) {
                    return done(null, false);
                }
                else {
                    return done(null, user);
                }
            })
            .catch(function (err) {
                done(err);
            });
    }
);




module.exports = {
    registerStrategy,
    loginStrategy,
}