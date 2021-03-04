const crudUser = require('../business/crudUser');

function createUser(req, res, next) {
    crudUser.createUser(req.body.email, req.body.password).then(function (user) {
        res.status(201).json({
            error: false,
            created: user
        });
    }).catch(function (err) {
        next(err);
    });
}

function getUser(req, res, next) {
    crudUser.getUser(req.params.id).then(function (user) {
        res.status(200).json({
            error: false,
            found: user
        });
    }).catch(function (err) {
        next(err);
    });

}

function listUsers(req, res, next) {
    crudUser.listUsers().then(function (users) {
        res.status(200).json({
            error: false,
            found: users
        });
    }).catch(function (err) {
        next(err);
    });

}

function overwriteUser(req, res, next) {
    crudUser.overwriteUser(req.params.id, req.body).then(function (user) {
        res.status(200).json({
            error: false,
            overwritten: user
        });
    }).catch(function (err) {
        next(err);
    });

}

function modifyUser(req, res) {
    crudUser.modifyUser(req.params.id, req.body).then(function (user) {
        res.status(200).json({
            error: false,
            modify: user
        });
    }).catch(function (err) {
        next(err);
    });
}

function deleteUser(req, res) {
    crudUser.deleteUser(req.params.id).then(function (user) {
        res.status(200).json({
            error: false,
            delete: user
        });
    }).catch(function (err) {
        next(err);
    });
}

module.exports = {
    createUser,
    listUsers,
    getUser,
    overwriteUser,
    modifyUser,
    deleteUser,
};