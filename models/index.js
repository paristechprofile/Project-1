const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true } );

module.exports = {
    User : require('./user'),
    Album: require('./album'),
}