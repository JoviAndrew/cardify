const router = require('express').Router();
const home = require('../controllers/home_controller')
const uploadFile = require('../helper/upload');

//Route upload file
router.post('/upload', 
            uploadFile.multer.single('fieldname'), 
            uploadFile.sendUploadToGCS, 
            home.uploadImage);

module.exports = router;
