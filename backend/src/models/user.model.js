import mongoose from "mongoose";
import isEmail from 'validator/lib/isEmail.js';

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Please enter an email'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please enter a valid email']
    },
    password: {
        type: String,
        required: [true, 'Please enter an password'],
        minlength: [6, 'Min password length is 6 characters']
    },
}, {
    timestamps: true,
});

export const User = mongoose.model('User', userSchema);

