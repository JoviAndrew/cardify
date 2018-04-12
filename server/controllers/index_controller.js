
var bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const saltRounds = 10;

module.exports = {
    loginUser: function(req, res){
        // var regexUsername = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        // let password = req.body.password;
        // let letter = /[a-zA-Z]/;
        // let number = /[0-9]/;
        // let goodPassword = letter.test(password) && number.test(password);
        // if(password.length < 6){
        //     res.json({
        //         message: 'Password too short!'
        //     })
        // }else if(!goodPassword){
        //     res.json({
        //         message: 'Password must be alphanumeric'
        //     })
        // }else if(!regexUsername.test(req.body.username)){
        //     res.json({
        //         message: 'Username must be email'
        //     })
        // }else{
        User.findOne({
          email: req.body.email
        })
        .then(userData => {
          if(userData == null) {
            const newUser = new User(req.body)
            newUser.save()
            .then(data => {
              let token = jwt.sign({ id: data._id, name: data.name }, 'shhhhh');

              res.status(200).json({
                token: token
              })

            })
          }
        })

        //     users.findOne({
        //         username: req.body.email
        //     })
        //     .then(function(userData){
        //         if(userData != null){
        //             res.status(400).json({
        //                 message: "username has been taken!",
        //             })
        //         }else{
        //             let salt = bcrypt.genSaltSync(saltRounds)
        //             let hash = bcrypt.hashSync(password, salt);
        //                 users
        //                 .create({
        //                     username: req.body.username,
        //                     password: hash,
        //                 })
        //                 .then(function(result){
        //                     res.status(200).json({
        //                         message: "success register a new user",
        //                         result: result
        //                     })
        //                 })
        //                 .catch(function(err){
        //                     res.status(500).json({
        //                         message: err
        //                     })
        //                 })
        //         }
        //     })
        //     .catch(function(err){
        //         res.status(500).json({
        //             message: err
        //         })
        //     })
        //
        // }
    }
    // ,
    // loginUser: function(req, res){
    //   console.log(req.body);
        // users.findOne({
        //     username: req.body.username
        // })
        // .then(function(userData){
        //     if(!userData){
        //         res.status(400).json({
        //             message: 'incorrect username or password'
        //         })
        //     }else{
        //         bcrypt.compare(req.body.password, userData.password, function(err, result){
        //             if(!result){
        //                 res.json({
        //                     message: 'incorrect username or password'
        //                 })
        //             }else{
        //                 let token = jwt.sign({id: userData._id}, process.env.SECRET)
        //                 res.json({
        //                     message: 'Success login',
        //                     token: token
        //                 })
        //             }
        //         })
        //     }
        // })
    // }
}
