const User = require('../models/User');
const bcrypt = require('bcrypt');


function createUser(req, res, next) {
    const user = new User(req.body);
    user.save().then(function(){
        res.status(201).json({ error: false, created: user }); 
    }).catch(function (err){
        next(err);
    });
   
}

function getUser(req, res, next) {
    User.findById(req.params.id).then(function(user){
        res.status(200).json({ error: false, found: user  });

    }).catch(function(err){
        next(err);

    });
   
}

function listUsers(req, res, next) {
    User.find().then(function(users){
        res.status(200).json({ error: false, found: users });

    }).catch(function(err){
        next(err);

    });
    
}

function overwriteUser(req, res, next) {
    User.findOneAndReplace({_id: req.params.id}, req.body).then(function(user){
        res.status(200).json({ error: false, overwritten: user });

    }).catch(function(){
        next(err);
    })
   
}

function modifyUser(req, res) {
    User.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(user){
        res.status(200).json({ error: false, modify: user });

    }).catch(function(){
        next(err);
    });
  
}

function deleteUser(req, res) {
    User.findByIdAndDelete({_id: req.params.id}).then(function(user){
        res.status(200).json({ error: false, delete: user });

    }).catch(function(){
        next(err);
    })
}

module.exports = {
    createUser,
    listUsers,
    getUser,
    overwriteUser,
    modifyUser,
    deleteUser,
};
