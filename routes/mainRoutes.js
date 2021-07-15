const express = require('express');
const router =  express.Router();
const controladorMain = require('../controller/mainController');

router.get('/', controladorMain.index);

router.get('/login', controladorMain.login);

router.get('/blog', controladorMain.blog);

router.get('/register', controladorMain.register);

module.exports = router;
