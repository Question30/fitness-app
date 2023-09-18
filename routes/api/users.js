const express = require('express');
const userCtrl = require('../../controllers/api/users');
const ensureLoggedin = require('../../config/ensureLoggedin');

const router = express.Router();

//  POST
router.post('/', userCtrl.create);

router.post('/login', userCtrl.login);

router.get('/check-token', ensureLoggedin, userCtrl.checkToken);

module.exports = router;