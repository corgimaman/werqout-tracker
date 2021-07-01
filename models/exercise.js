const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    name: String,
    type: {
        type: String,
        enum: ["resistance", "cardio"],
        trim: true,
        required: "Please enter 'resistance' or 'cardio'"
        },
    weight: {
        type: Number,
        required: function () {this.type === "resistance"},
        trim: true
        },
    sets: {
        type: Number,
        required: function () {this.type === "resistance"},
        trim: true
        },
    reps: {
        type: Number,
        required: function () {this.type === "resistance"},
        trim: true
    },
    duration: {
        type: Number,
        trim: true
        },
    distance: {
        type: Number,
        required: function () {this.type === "cardio"},
        trim: true
        },
});

//const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = ExerciseSchema;