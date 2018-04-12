const router = require('express').Router();
const index = require('../controllers/index_controller');

//Register new User
router.post('/register', index.registerUser);

//Login User
router.post('/login', index.loginUser);

module.exports = router;
