import {Response, Request} from "express";

const User = require('../models/user.model');

const handleErrors = (err: any) => {
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

const login = async (req: Request, res: Response) => {
    const {email, password} = req.body;

    console.log(email);
    console.log(password);
    res.send('new signup');
}

const register = async (req: Request, res: Response) => {
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

const logout = (req: Request, res: Response) => {
    res.send('logout');
}


module.exports = {
    login, register, logout
}