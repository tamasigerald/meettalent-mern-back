const jwt = require("jsonwebtoken");
const crudUser = require("../business/crudUser");
const config = require("../config");

function login(req, res, next) {
    //console.log(req.body.email);
    crudUser
        .getUserByEmail(req.body.email)
        .then(function (userFound) {
            if (userFound) {
                if (userFound.checkPassword(req.body.password)) {
                    return next();
                } else {
                    res.status(200).json({
                        error: true,
                        logged: false,
                        message: "Incorrect password",
                    });
                }
            } else {
                res.status(200).json({
                    error: true,
                    logged: false,
                    message: "User not found",
                });
            }
        })
        .catch(function (err) {
            next(err);
        });
}

function register(req, res, next) {
    crudUser
        .createUser(req.body.email, req.body.password)
        .then(function (newUser) {
            next();
        })
        .catch(function (err) {
            next(err);
        });
}

function getToken(req, res, next) {
    try {
        const token = jwt.sign(
            req.body, // Desde el cliente nos tienen que pasar un json con email y password
            config.server.secret,
            {
                expiresIn: config.server.jwtExpiration,
            }
        );
        res.status(200).json({
            error: false,
            token,
        });
    } catch (err) {
        next(err);
    }
}

function verifyToken(req, res, next) {
    try {
        if (req.headers.authorization) {
            const token = req.headers.authorization.split(" ")[1];
            jwt.verify(token, config.server.secret);
            next();
        } else {
            res.status(400).json({
                error: true,
                message: "Lack of authorization header",
            });
        }
    } catch (err) {
        next(err);
    }
}

module.exports = {
    register,
    login,
    getToken,
    verifyToken,
};
