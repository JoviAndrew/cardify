const mongoose = require('mongoose');
const Schema = mongoose.Schema

let userSchema = mongoose.Schema({
    idFB: String,
    name: String,
    email: String,
    card: String
}, {
    timestamps: true
})

let User = mongoose.model('Users', userSchema);

module.exports = User;
