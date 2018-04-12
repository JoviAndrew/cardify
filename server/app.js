require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');

const morgan = require('morgan')

const indexRouter = require('./routers/index'); 
const homeRouter = require('./routers/home')

//=====================
//Directory Database!
//=====================
// mongoose.connect('mongodb://localhost/cardify');
mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@ds241699.mlab.com:41699/cardify`);


//=====================
//Directory image upload!
//=====================


app.use(express.static('./')); // serve all files in root folder, such as index.html

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter)
app.use('/home', homeRouter)

app.listen(3000, () =>{
    console.log('listening on port 3000')
})