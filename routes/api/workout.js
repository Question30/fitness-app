const express = require('express');
const ensureLoggedin = require('../../config/ensureLoggedin');
const workoutCtrl = require('../../controllers/api/workout');

const router = express.Router();

//GET/Read
router.get('/', ensureLoggedin, workoutCtrl.getAllWorkouts);


//Post/Create
router.post('/new', ensureLoggedin, workoutCtrl.createWorkout);

//Get user specific workouts
router.post('/all', ensureLoggedin, workoutCtrl.getAllUserWorkouts);
//Put/Update
router.put('/add-exercise/:id', ensureLoggedin, workoutCtrl.addExercises);

// router.put('/update/:id', ensureLoggedin, workoutCtrl.updateWorkout);

//Delete
router.delete('/:id', ensureLoggedin, workoutCtrl.deleteWorkout);

//Show/Read
router.get('/:id', ensureLoggedin, workoutCtrl.getWorkoutByID);

//Finished Workout
router.post('/finish-workout', ensureLoggedin, workoutCtrl.finishWorkout)

//Workout History
router.post('/history', ensureLoggedin, workoutCtrl.getHistory)

module.exports = router;