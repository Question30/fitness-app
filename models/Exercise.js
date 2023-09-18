const mongoose = require('mongoose');

const setSchema = new mongoose.Schema({
    set: {type: Number, default: 0},
    weight: {type: Number, default: 0},
    reps: {type: Number, default: 0},
})

const exerciseSchema = new mongoose.Schema({
    name: {type: String, required: true},
    muscleGroup:{type: String, enum:['Chest', 'Shoulders', 'Upper Chest', 'Triceps', 'Back', 'Lats', 'Rear Delts','Biceps', 'Quads', 'Hamstrings', 'Calves' ], required: true},
    type:{type: String, enum:['Barbell', 'Dumbell', 'Machine', 'Cable', 'Body-weight']},
    sets: [setSchema],
})

const Exercise =mongoose.model('Exercise', exerciseSchema);
 
module.exports = Exercise;