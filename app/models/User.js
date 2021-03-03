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
    },
    {
        timestamps: true,
    }
);


//coge contraseña en texto plano y guarda encriptada
userSchema.pre('save', async function(next) {
    try {
        this.password = await bcrypt.hash(this.password, config.server.bcryptRounds);
        next();
    }
    catch(err) {
        next(err);
    }
});



const User = mongoose.model('User', userSchema);

module.exports= User;