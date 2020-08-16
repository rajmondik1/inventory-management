import mongoose from "mongoose";
import { Item } from './item.model.js'

const itemGroupSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: {type: String, required: true },
    items: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Item',
        required: false
    }]
}, {
    timestamps: true,
});

export const ItemGroup = mongoose.model('ItemGroup', itemGroupSchema);