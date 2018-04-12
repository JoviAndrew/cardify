const router = require('express').Router();
const home = require('../controllers/home_controller')
var multer  = require('multer')

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, '../testImage/')
    },
    filename: function(req, file, cb){
        cb(null, new Date().toISOString() + file.originalname)
    }
})

const fileFilter = function(req, file, cb){
    //Fileter files only accpet jpeg, jpg and png
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg' || file.mimetype === 'image/png'){
        //accept a file
        cb(null, true);
    }else{
        //reject a file
        cb(null, false);
    }

}

const upload = multer({
    storage: storage,
    limits: {fileSize: 1024 * 1024 * 5},        //Only accepts up to 5 MB files
    fileFilter: fileFilter
})


//Route upload image
router.post('/upload', upload.single('fileImage'), home.newCardData);

router.get('/show', home.getData);

module.exports = router;