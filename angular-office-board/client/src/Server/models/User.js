const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const {SALT_ROUNDS} = require('../config/env');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        minLength: 3,
        required: [true, 'Username is required!'],
        unique: true,
    },
    email: {
        type: String,
        minLength: 10,
        required: [true, 'Email is required!'],
        unique: true,
    },
    password: {
        type: String,
        minLength: 4,
        required: true,
    },
    position: {
        type: String,
        minLength: 4,
    },
    department: {
        type: String,
        minLength: 4,
    },

    
}, {timestamps:true});

userSchema.pre('save', function(next) {
    bcrypt.hash(this.password,SALT_ROUNDS)
    .then((hashedPassword => {
        this.password = hashedPassword;
        next();
    }))
})

const User = mongoose.model('User', userSchema);

module.exports = User;