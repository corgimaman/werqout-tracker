const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ExerciseSchema = require('./exercise')

const WorkoutSchema = new Schema({
    name: { type: String, trim: true },
    day: { type: Date, default: Date.now },
    exercises: [ExerciseSchema]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;