const User = require('../models/User');

/**
 * @param {string} email 
 * @param {string} password 
 * @param {string} nif
 * @param {string} name
 * @returns {Promise}
 */

function createUser(email, password, social, nif, name) {
    const user = new User({
        email,
        password,
        social,
        name,
        nif,

    });
    return user.save();
}


/**
 * @param {String} userEmail
 * @param {Promise}  
 */

function getUserBySocialId(socialId) {
    return User.findOne({ social: socialId });
}


/**
 * @param {String} userID 
 * @returns {Promise}
 */

function getUser(userId) {
    return User.findById(userId);

}


/**
 * @param {String} userEmail
 * @returns {Promise}
 */

function getUserByEmail(userEmail) {
    return User.findOne({
        email: userEmail
    });
}


/**
 * 
 * @returns {Promise}
 */

function listUsers() {
    return User.find();
}


/**
 * @param {ObjectId} userId 
 * @param {User} doc 
 * @returns {Promise}
 */

function overwriteUser(userId, doc) {
    return User.findOneAndReplace({
        _id: userId
    }, doc);
}


/**
 * @param {ObjectId} userId 
 * @param {User} doc 
 * @returns {Promise}
 */

function modifyUser(userId, doc) {
    return User.findOneAndUpdate({
        _id: userId
    }, doc);
}


/**
 * @param {String} userId
 * @returns {Promise}
 */

function deleteUser(userId) {
    return User.findByIdAndDelete({
        _id: userId
    });
}

module.exports = {
    createUser,
    listUsers,
    getUser,
    getUserByEmail,
    getUserBySocialId,
    overwriteUser,
    modifyUser,
    deleteUser,
};