const mongoose = require('mongoose');
const Schema = mongoose.Schema

let userSchema = mongoose.Schema({
    name: String,
    email: String,
    card: String
}, {
    timestamps: true
})

let User = mongoose.model('Users', userSchema);

module.exports = User;
