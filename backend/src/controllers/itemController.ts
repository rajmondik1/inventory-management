import { Response, Request } from "express";

const Item = require('../models/item.model');

const list = (req: Request, res: Response) => {
    Item.find()
        .then((items: Array<typeof Item>) => res.json(items))
        .catch((err: Error) => res.status(400).json('Error: ' + err));
}

const view = (req: Request, res: Response) => {
    const id: String = req.params.id;

    Item.findById(id)
        .then((item: typeof Item) => res.json(item))
        .catch((err: Error) => res.status(400).json('Error: ' + err));
}

const save = (req: Request, res: Response) => {
    const item = new Item(req.body);

    item.save()
        .then(() => res.json(item))
        .catch((err: object) => res.status(400).json('Error: ' + err));
}

const update = (req: Request, res: Response) => {
    const id: String = req.params.id;

    Item.findByIdAndUpdate(id, req.body)
        .then(() => res.json('Success'))
        .catch((err: object) => res.status(400).json('Error: ' + err));
}

const remove = (req: Request, res: Response) => {
    const id: String = req.params.id;
    Item.findByIdAndRemove(id).then(() => {
        res.json('Success');
    }).catch((err: Error) => {
        res.status(500).json(err);
    })
}

module.exports = {
    list, view, save, update, remove
}