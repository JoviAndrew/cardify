const router = require('express').Router();
const index = require('../contorllers/index_controller');

//Register new User
router.post('/register', index.registerUser);

//Login User
router.post('/login', index.loginUser);

module.exports = router;