import { User } from '../models/user.model.js';

const handleErrors = (err) => {
    let errors = {
        email: '',
        password: ''
    };

    if (err.code && err.code === 11000) {
        errors.email = 'That email is already taken';
    }

    if (err.errors) {

    // @ts-ignore
    Object.values(err.errors).forEach(({properties}) => {
        console.log("Properties: " + properties);
        // @ts-ignore
        return errors[properties.path] = properties.message;
    });
    }

    return errors;
}

export const login = async (req, res) => {
    const {email, password} = req.body;

    console.log(email);
    console.log(password);
    res.send('new signup');
}

export const register = async (req, res) => {
    const {email, password} = req.body;

    try {
        const user = await User.create({email, password});
        res.status(201).json(user);
    } catch (e) {
        const errors = handleErrors(e);
        console.log(errors);
        res.status(400).json(errors);
    }
}

export const logout = (req, res) => {
    res.send('logout');
}