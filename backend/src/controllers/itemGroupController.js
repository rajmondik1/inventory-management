import { ItemGroup } from '../models/itemGroup.model.js';

export const list = (req, res) => {
    ItemGroup.find()
        .then(groups => res.json(groups))
        .catch(err => res.status(400).json('Error: ' + err));
}
//TODO: Attach user object

export const view = (req, res) => {
    const id = req.params.id;

    ItemGroup.findById(id)
        .then(group => res.json(group))
        .catch(err => res.status(400).json('Error: ' + err));
}

export const save = (req, res) => {
    const group = new ItemGroup(req.body);

    group.save()
        .then(() => res.json(group))
        .catch(err => res.status(400).json('Error: ' + err));
}

export const update = (req, res) => {
    const id = req.params.id;

    ItemGroup.findByIdAndUpdate(id, req.body)
        .then(() => res.json('Success'))
        .catch((err) => res.status(400).json('Error: ' + err));
}

export const remove = (req, res) => {
    const id = req.params.id;
    ItemGroup.findByIdAndRemove(id).then(() => {
        res.json('Success');
    }).catch((err) => {
        res.status(500).json(err);
    })
}