import mongoose from "mongoose";
import isEmail from 'validator/lib/isEmail.js';
import bcrypt from 'bcrypt';

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

// fire a function after user is saved to db
userSchema.post('save', (doc, next) => {
    console.log('new user was created and saved', doc);
    next();
});

// fire a func before doc was saved
userSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

export const User = mongoose.model('User', userSchema);

