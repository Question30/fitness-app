const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Workout = require('./Workout').schema;

// Salt rounds
const SALT_ROUNDS = 6;

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {
      type: String,
      unique: true,
      trim: true,
      lowercase: true,
      required: true
    },
    password: {
      type: String,
      trim: true,
      minLength: 3,
      required: true
    },
    workouts: [Workout],
    isAdmin: {type: Boolean, default: false},
    isTrainer: {type: Boolean, default: false},
}, {timestamps: true,
    toJSON: {
        transform: function(doc, ret) {
            delete ret.password;
            return ret;
        }
    }

})

userSchema.pre('save', async function(next){
    //'this' is the user doc
    if(!this.isModified('password')) return next();
    //update the password with computed hash
    this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
    return next();
} );

const User = mongoose.model('User', userSchema);

module.exports = User;