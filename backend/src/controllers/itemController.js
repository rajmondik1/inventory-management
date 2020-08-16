import { Response, Request } from "express";

const Item = require('../models/item.model');

const list = (req, res) => {
    Item.find()
        .then(items => res.json(items))
        .catch(err => res.status(400).json('Error: ' + err));
}

const view = (req, res) => {
    const id = req.params.id;

    Item.findById(id)
        .then(item => res.json(item))
        .catch(err => res.status(400).json('Error: ' + err));
}

const save = (req, res) => {
    const item = new Item(req.body);

    item.save()
        .then(() => res.json(item))
        .catch(err => res.status(400).json('Error: ' + err));
}

const update = (req, res) => {
    const id = req.params.id;

    Item.findByIdAndUpdate(id, req.body)
        .then(() => res.json('Success'))
        .catch((err) => res.status(400).json('Error: ' + err));
}

const remove = (req, res) => {
    const id = req.params.id;
    Item.findByIdAndRemove(id).then(() => {
        res.json('Success');
    }).catch((err) => {
        res.status(500).json(err);
    })
}

module.exports = {
    list, view, save, update, remove
}