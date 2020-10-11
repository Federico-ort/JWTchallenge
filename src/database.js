const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://challenge:challenge@jwtchallenge.2pbqj.mongodb.net/challenge?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log('Database is conected'));