const mongoose = require('mongoose');
const Exercise = require('./Exercise');

const workoutSchema = new mongoose.Schema({
    name: {type: String, required: true},
    Day: {type: String, enum: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun']},
    exercises: [Exercise],
    isFinished: {type: Boolean, default: false}
});

const WorkOut = mongoose.model('Workout', workoutSchema);

module.exports = WorkOut;