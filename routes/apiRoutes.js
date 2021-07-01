const router = require("express").Router();
const { Workout, Exercise } = require("../models");

// get api/workouts
// post api/workouts

router.get("/api/workouts", (req, res) => {
    Workout.aggregate([{
        $addFields: {
            totalDuration: {
                $sum: "$exercises.duration"
            },
            totalWeight: {
                $sum: "$exercises.weight"
            }
        }
    }]).then(dbWorkout  => {
        res.json(dbWorkout);
    }).catch(err => {
        res.status(400).json(err);
    });
    // Workout.find({}).then(dbWorkout => {
    //     console.log(dbWorkout)
    //     res.json(dbWorkout);
    // }).catch(err => {
    //     res.status(400).json(err);
    // });
});

router.post("/api/workouts", ({body}, res) => {
    Workout.create(body).then(dbWorkout => {
        res.json(dbWorkout);
    }).catch(err => {
        res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", (req, res) => {
    Workout.findOneAndUpdate(
        { _id: req.params.id },
        { $push: { exercises:  req.body } }
    ).then(dbWorkout  => {
        res.json(dbWorkout);
    }).catch(err => {
        res.status(400).json(err);
    });
});

// for stats page:
router.get("/api/workouts/range", (req, res) => {
    Workout.aggregate([{
        $addFields: {
            totalDuration: {
                $sum: "$exercises.duration"
            },
            totalWeight: {
                $sum: "$exercises.weight"
            }
        }
    }]).then(dbWorkout  => {
        res.json(dbWorkout);
    }).catch(err => {
        res.status(400).json(err);
    });
});
// .limit 7


module.exports = router;