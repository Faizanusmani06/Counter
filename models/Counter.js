const mongoose = require("mongoose");

const counterSchema = new mongoose.Schema(
    {
        counter: {
            type: Number,
            required: true,
        },
        updatedAt:{
            type:Date,
            required:true,
            default:Date.now(),
        }
    }
);

module.exports = mongoose.model("Counter", counterSchema);