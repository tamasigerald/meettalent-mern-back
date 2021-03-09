const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const config = require('../config');

const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
        },
        password: {
            type: String,
        },
        social: {
            type: String,
        },
        nif: {
            type: String,
        },
        name: {
            type: String,
        },
        avatar: {
            type: String
        }


    },
    {
        timestamps: true,
    }
);


//collects the password in plain text and converts it encrypted
userSchema.pre('save', async function (next) {
    if (this.password) {
        this.password = bcrypt.hashSync(this.password, config.server.bcryptRounds);
    }
    next();
});

//Compare and return true or false
userSchema.method({
    checkPassword: function (plaintextPassword) {
        return bcrypt.compareSync(plaintextPassword, this.password);
    },
});



const User = mongoose.model('User', userSchema);

module.exports = User;