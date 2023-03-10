const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/web-app');

const userSchema = new mongoose.Schema({
    username: String,
    email: String
}, {collection: 'users'});

const userRepository = mongoose.model('users', userSchema, 'users');
module.exports = {
    Mongoose: mongoose,
    UserRepository: userRepository
};
