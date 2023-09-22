const express = require('express');
const ensureLoggedin = require('../../config/ensureLoggedin');
const exerciseCtrl = require('../../controllers/api/exercise');

const router = express.Router();

//GET/Read
router.get('/', exerciseCtrl.getAll);

//Post/Create
router.post('/new', ensureLoggedin, exerciseCtrl.createExercise);

//Put/Update
router.put('/:id', ensureLoggedin, exerciseCtrl.updateExercise)

//Delete
router.delete('/:id', ensureLoggedin, exerciseCtrl.deleteExercise)

//Seed
router.get('/seed', exerciseCtrl.seed);

module.exports = router;