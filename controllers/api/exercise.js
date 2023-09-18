const Exercise = require('../../models/Exercise');
const data = require('../../models/data');


async function getAll(req, res){
    try{
        const allExercises = await Exercise.find({});
        res.json(allExercises);
    }catch(error){
        res.status(400).json(error);
    }
}

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
    getAll
}