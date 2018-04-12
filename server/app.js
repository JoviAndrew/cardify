require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
var multer  = require('multer')


const indexRouter = require('./routers/index'); 
const homeRouter = require('./routers/home')

//=====================
//Directory Database!
//=====================
mongoose.connect('mongodb://localhost/cardify');


//=====================
//Directory image upload!
//=====================
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../testImage')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname + '-' + Date.now() + '-' + getExtension(file));
    }
});

function getExtension(file) {
    // this function gets the filename extension by determining mimetype. To be exanded to support others, for example .jpeg or .tiff
    var res = '';
    if (file.mimetype === 'image/jpeg') res = '.jpg';
    if (file.mimetype === 'image/png') res = '.png';
    return res;
}

app.use(express.static('./')); // serve all files in root folder, such as index.html

var upload = multer({ 
    storage: storage 
}).fields([
    {name: "filename", maxCount: 1}
])

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter)
app.use('/home', todoRouter)

app.listen(3000, () =>{
    console.log('listening on port 3000')
})