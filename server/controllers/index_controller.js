var bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const saltRounds = 10;

module.exports = {
  loginUser: function(req, res){
      User.findOne({
        idFB: req.body.obj.idFB
      })
      .then(userData => {
      if(userData == null) {
        const newUser = new User(req.body.obj)
        newUser.save()
        .then(data => {
          let token = jwt.sign({ id: data._id, name: data.name }, process.env.SECRET);
          res.status(200).json({
            token: token
          })
        })
        .catch(err => console.log(err))
      } else {
        let token = jwt.sign({ id: userData._id, name: userData.name }, process.env.SECRET);
        res.status(200).json({
          token: token
        })
      }
    })
  }
}
