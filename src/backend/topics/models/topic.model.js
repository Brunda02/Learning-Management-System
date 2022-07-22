const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const topicSchema = new Schema(
    {
        courseID:
        {
            type: String,
            required: true,
        },
        topicName:
        {
            type: String,
            required: true,
        },
        topicDuration:
        {
            type: Number,
            required: true,
        },
        topicURL:
        {
            type: String,
            required: true,
        },
        index:
        {
            type: Number,
            required: true,
        }
    }
);
const model = mongoose.model("table_topics", topicSchema);
module.exports = model;