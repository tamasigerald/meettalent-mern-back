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
        }
    },
    {
        timestamps: true,
    }
);


//coge contraseña en texto plano y guarda encriptada
userSchema.pre('save', async function (next) {
    if (this.password) {
        this.password = bcrypt.hashSync(this.password, config.server.bcryptRounds);
    }
    next();
});

//compara  y devuelve verdadero o falso
userSchema.method({
    checkPassword: function (plaintextPassword) {
        return bcrypt.compareSync(plaintextPassword, this.password);
    },
});



const User = mongoose.model('User', userSchema);

module.exports = User;