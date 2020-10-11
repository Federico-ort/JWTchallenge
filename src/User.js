const { Schema, model} = require('mongoose');
const { stringify } = require('querystring');

const userSchema = new Schema({
    username: String,
    email: String,
    password: String
});

module.exports = model('User', userSchema);
