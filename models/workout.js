const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    name: String,
    date: { type: Date, default: Date.now },
    type: String,
    exercises: [
        {
            type: Schema.Types.ObjectId,
            ref: "Exercise"
        }
    ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;