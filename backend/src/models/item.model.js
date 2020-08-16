import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: {type: String, required: true },
    value: {type: String, required: true },
}, {
    timestamps: true,
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;