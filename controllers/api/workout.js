const WorkOut = require('../../models/Workout');
const User = require('../../models/User');

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
        console.log(req.body);
        // const updatedWorkout = await WorkOut.findByIdAndUpdate(req.params.id, res.body)

    } catch (error) {
        res.status(400).json(error);
    }
}

//Update Workout
//req.body
// {
//     _id: '65087e35f41ff327d037fec5',
//     name: 'Alexander',
//     email: 'alex@gmail.com',
//     createdAt: '2023-09-18T16:43:33.463Z',
//     updatedAt: '2023-09-18T16:43:33.463Z',
//     __v: 0,
//     workouts: {
//       _id: '6509b6dd98bc9dc918d9e66e',
//       name: 'Back Day A',
//       day: 'Mon',
//       isFinished: true,
//       exercises: [ [Object], [Object], [Object], [Object] ],
//       __v: 3
//     }
//   }
async function updateWorkout(req, res){
    try {
       const user = await User.findByIdAndUpdate(req.body._id,{workouts: req.body.workouts} );
       res.status(200).json(user);

    } catch (error) {
        res.status(400).json({msg: error});
    }
}

module.exports ={
    createWorkout,
    getAllWorkouts,
    getWorkoutByID,
    addExercises,
    addSets,
    updateWorkout
}