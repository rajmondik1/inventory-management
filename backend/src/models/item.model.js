import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: {type: String, required: true },
    value: {type: String, required: true },
    group: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ItemGroup',
        required: true
    }
}, {
    timestamps: true,
});

export const Item = mongoose.model('Item', itemSchema);