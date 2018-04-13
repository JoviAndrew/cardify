
var bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const saltRounds = 10;

module.exports = {
    loginUser: function(req, res){
        User.findOne({
          email: req.body.email
        })
        .then(userData => {
          if(userData == null) {
            const newUser = new User(req.body)
            newUser.save()
            .then(data => {
<<<<<<< HEAD
              let token = jwt.sign({ id: data._id, name: data.name }, process.env.SECRET);

=======
              let token = jwt.sign({ id: data._id, name: data.name }, 'shhhhh');
>>>>>>> 1f043113442ed46033413ed0e4bac81bea0fabb5
              res.status(200).json({
                token: token
              })

            })
          }
        })
<<<<<<< HEAD
    }
=======

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
>>>>>>> 1f043113442ed46033413ed0e4bac81bea0fabb5
}
