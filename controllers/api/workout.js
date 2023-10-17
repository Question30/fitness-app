const WorkOut = require('../../models/Workout');
const User = require('../../models/User');

//Get all Workouts/Read
async function getAllWorkouts(req, res){
    try {
        const allWorkouts = await WorkOut.find({});
        res.json(allWorkouts);
    } catch (error) {
        res.status(400).json(error);
    }
}

//Get all user Workout templates
async function getAllUserWorkouts(req, res){
    try{
        const allWorkouts = await WorkOut.find({owner: req.body.email, isFinished: false});
        res.json(allWorkouts);

    }catch (error){
        res.status(400).json(error);
    }
}

//Workout history
async function getHistory(req, res){
    try {
        console.log(req.body);
      const history = await WorkOut.find({owner: req.body.email, isFinished: true})  ;
      res.json(history)
    } catch (error) {
        res.status(400).json(error)
    }
}

//GET workout by id/ Read
async function getWorkoutByID(req, res){
    try{
        const workout = await WorkOut.findById(req.params.id);
        res.status(200).json(workout);
    }catch(error){
        res.status(400).json(error);
    }
}

//Adds new workout to database/create
async function createWorkout(req, res){
    try{
        const createdWorkout = await WorkOut.create(req.body);
        res.json(createdWorkout);
    }catch(error){
        res.status(400).json(error);
    }
}

//Finish Workout
async function finishWorkout(req, res){
    try {
        console.log(req.body);
        const finishedWorkout = await WorkOut.create(req.body);
        res.json(finishedWorkout)
    } catch (error) {
        res.status(400).json(error)
    }
}

//Adds exercises to the workout/update
async function addExercises(req, res){
    try {
        const workout = await WorkOut.findById(req.params.id);
         workout.setExercises(req.body);
       
        res.status(200).json(workout);
    } catch (error) {
        res.status(400).json(error);
    }
}

//Delete
async function deleteWorkout(req, res){
    try{
        const workoutToDelete = await WorkOut.findOneAndDelete(req.params.id);
        res.status(200).json(workoutToDelete);
    }catch (error){
        res.status(400).json(error);
    }
}

// //ADD workouts to user/ update
// async function updateWorkout(req, res){
//     try {
//        const user = await User.findById(req.body._id);
//         const updatedWorkouts = [...user.workouts, req.body.workouts];
//         console.log(updatedWorkouts);

//         await User.findByIdAndUpdate(req.body._id, {workouts: updatedWorkouts})
//       res.status(200).json(user);

//     } catch (error) {
//         res.status(400).json({msg: error});
//     }
// }

module.exports ={
    createWorkout,
    getAllWorkouts,
    getWorkoutByID,
    addExercises,
    deleteWorkout,
    getAllUserWorkouts,
    finishWorkout,
    getHistory
}