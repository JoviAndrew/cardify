const router = require('express').Router();
const index = require('../controllers/index_controller');

//Login User
router.post('/login', index.loginUser);

module.exports = router;
