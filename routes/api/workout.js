const express = require('express');
const ensureLoggedin = require('../../config/ensureLoggedin');
const workoutCtrl = require('../../controllers/api/workout');

const router = express.Router();

//GET
router.get('/', ensureLoggedin, workoutCtrl.getAllWorkouts)


//Post
router.post('/new', ensureLoggedin, workoutCtrl.createWorkout);

//Update
router.put('/add-exercise/:id', ensureLoggedin, workoutCtrl.addExercises);

router.put('/add-sets/:id', ensureLoggedin, workoutCtrl.addSets);

router.put('/update/:id', ensureLoggedin, workoutCtrl.updateWorkout)

//Show
router.get('/:id', ensureLoggedin, workoutCtrl.getWorkoutByID);

module.exports = router;