const User = require('../models/User');

/**
 * @param {string} email 
 * @param {string} password 
 * @returns {Promise}
 */

function createUser(email, password) {
    const user = new User({
        email,
        password
    });
    return user.save();
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
    return User.findById({
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
    overwriteUser,
    modifyUser,
    deleteUser,
};