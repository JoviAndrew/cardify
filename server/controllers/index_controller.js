
var bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const saltRounds = 10;

module.exports = {
<<<<<<< HEAD
    loginUser: function(req, res){
        User.findOne({
          email: req.body.email
        })
        .then(userData => {
          if(userData == null) {
            const newUser = new User(req.body)
            newUser.save()
            .then(data => {
              let token = jwt.sign({ id: data._id, name: data.name }, process.env.SECRET);

              res.status(200).json({
                token: token
              })
=======
  loginUser: function(req, res){
      User.findOne({
        email: req.body.email
      })
      .then(userData => {
      if(userData == null) {
        const newUser = new User(req.body)
        newUser.save()
        .then(data => {
          let token = jwt.sign({ id: data._id, name: data.name }, 'shhhhh');
>>>>>>> resolved conflict

          res.status(200).json({
            token: token
          })
        })
<<<<<<< HEAD
    }
=======
      } else {
        let token = jwt.sign({ id: userData._id, name: userData.name }, 'shhhhh');

        res.status(200).json({
          token: token
        })
      }
    })
  }
>>>>>>> resolved conflict
}
