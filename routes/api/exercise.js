const express = require('express');
const ensureLoggedin = require('../../config/ensureLoggedin');
const exerciseCtrl = require('../../controllers/api/exercise');

const router = express.Router();

//GET
router.get('/', exerciseCtrl.getAll);

//Seed
router.get('/seed', exerciseCtrl.seed);

module.exports = router;