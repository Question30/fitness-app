const Exercise = require('../../models/Exercise');
const data = require('../../models/data');

//Get
async function getAll(req, res){
    try{
        const allExercises = await Exercise.find({});
        res.json(allExercises);
    }catch(error){
        res.status(400).json(error);
    }
}

//Post/create
async function createExercise(req, res){
    try {
        const createdExercise = await Exercise.create(req.body);
        res.status(200).json(createdExercise);
    } catch (error) {
        res.status(400).json(error)
    }
}

//Put/update exercise
async function updateExercise(req, res){
    try{
        const exerciseToUpdate = await Exercise.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json(exerciseToUpdate);
    }catch (error){
        res.status(400).json(error);
    }
}

//Delete Exercise
async function deleteExercise(req, res){
    try {
        const exerciseToDelete = await Exercise.findByIdAndDelete(req.params.id);
        res.status(200).json(exerciseToDelete);
    } catch (error) {
        res.status(400).json(error)
    }
}

//Seed

async function seed(req, res){
    try {
       const createdExercises = await Exercise.insertMany(data);
        res.send(createdExercises)
    } catch (error) {
        res.status(400).json(error);
    }
} 

module.exports = {
    seed,
    getAll,
    createExercise,
    deleteExercise,
    updateExercise
}