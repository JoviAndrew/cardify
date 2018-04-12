const router = require('express').Router();

//Route upload image
router.post('/home/upload', uploadImage);

module.exports = router;