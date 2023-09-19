const WorkOut = require('../../models/Workout');

//Get all Workouts
async function getAllWorkouts(req, res){
    try {
        const allWorkouts = await WorkOut.find({});
        res.json(allWorkouts);
    } catch (error) {
        res.status(400).json(error);
    }
}

//GET workout by id
async function getWorkoutByID(req, res){
    try{
        const workout = await WorkOut.findById(req.params.id);
        res.status(200).json(workout);
    }catch(error){
        res.status(400).json(error);
    }
}

//Adds new workout to database
async function createWorkout(req, res){
    try{
        const createdWorkout = await WorkOut.create(req.body);
        res.json(createdWorkout);
    }catch(error){
        res.status(400).json(error);
    }
}

//Adds exercises to the workout
async function addExercises(req, res){
    try {
        const workout = await WorkOut.findById(req.params.id);
         workout.setExercises(req.body);
       
        res.status(200).json(workout);
    } catch (error) {
        res.status(400).json(error);
    }
}

//Add sets
async function addSets(req, res){
    try {
        const workout = await WorkOut.findById(req.params.id);
        

    } catch (error) {
        res.status(400).json(error);
    }
}

module.exports ={
    createWorkout,
    getAllWorkouts,
    getWorkoutByID,
    addExercises,
    addSets
}