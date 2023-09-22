const express = require('express');
const userCtrl = require('../../controllers/api/users');
const ensureLoggedin = require('../../config/ensureLoggedin');

const router = express.Router();

//POST/Create
router.post('/', userCtrl.create);

router.post('/login', userCtrl.login);

//GET/Read
router.get('/check-token', ensureLoggedin, userCtrl.checkToken);
//Read
router.get('/workout-history/:id', ensureLoggedin, userCtrl.getUserWorkouts);

//Put/Update
router.put('/update-user/:id', ensureLoggedin, userCtrl.updateUser)

//Delete
router.delete('/admin', ensureLoggedin, userCtrl.deleteUser)

//Get
router.get('/admin', ensureLoggedin, userCtrl.getAllUsers);

module.exports = router;