const express = require('express');
const { register, login, cities } = require('../controller');


const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/cities', cities);

module.exports = router;