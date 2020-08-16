import mongoose from "mongoose";

const itemGroupSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: {type: String, required: true },
    item: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Item'
    }
}, {
    timestamps: true,
});

const ItemGroup = mongoose.model('ItemGroup', itemGroupSchema);

module.exports = ItemGroup;