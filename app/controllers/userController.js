const User = require('../models/User');

async function createUser(req, res) {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).json({ error: false, created: newUser });
    }
    catch (err) {
        res.status(500).json({ error: true, message: err.message });
    }
}

async function getUser(req, res) {
    try {
        const userFound = await User.findById(req.params.id);
        res.status(200).json({ error: false, found: userFound });
    }
    catch (err) {
        res.status(500).json({ error: true, message: err.message });
    }
}

async function listUsers(req, res) {
    try {
        const usersFound = await User.find();
        res.status(200).json({ error: false, found: usersFound });
    }
    catch (err) {
        res.status(500).json({ error: true, message: err.message });
    }
}

async function overwriteUser(req, res) {
    try {
        const userReplaced = await User.findOneAndReplace({ _id: req.params.id }, req.body);
        res.status(200).json({ error: false, overwritten: userReplaced });
    }
    catch (err) {
        res.status(500).json({ error: true, message: err.message });
    }
}

async function modifyUser(req, res) {
    try {
        const userUpdated = await User.findByIdAndUpdate({ _id: req.params.id }, req.body);
        res.status(200).json({ error: false, changed: userUpdated });
    }
    catch (err) {
        res.status(500).json({ error: true, message: err.message });
    }
}

async function deleteUser(req, res) {
    try {
        const userDeleted = await User.findOneAndDelete(req.params.id);
        res.status(200).json({ error: false, deleted: userDeleted });
    }
    catch (err) {
        res.status(500).json({ error: true, message: err.message });
    }
}

module.exports = {
    createUser,
    listUsers,
    getUser,
    overwriteUser,
    modifyUser,
    deleteUser,
};
