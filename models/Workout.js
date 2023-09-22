const mongoose = require('mongoose');
const Exercise = require('./Exercise').schema;

const workoutSchema = new mongoose.Schema({
    name: {type: String, required: true},
    day: {type: String, enum: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun']},
    exercises: [Exercise],
    isFinished: {type: Boolean, default: false}
}, {timestamps: true});

workoutSchema.methods.setExercises = async function(exercise){
    const workout = this;

    exercise.map((ex) => {
        workout.exercises.push({name: ex.name, muscleGroup: ex.muscleGroup, type: ex.type});
    })

    workout.save();
    
}



const WorkOut = mongoose.model('Workout', workoutSchema);

module.exports = WorkOut;