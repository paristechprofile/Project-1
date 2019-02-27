const mongoose = require('mongoose');
mongoose.connect('mongodb://<dbuser>:<dbpassword>@ds249035.mlab.com:49035/heroku_pkcmd448', { useNewUrlParser: true } );

module.exports = {
    User : require('./user'),
    Album: require('./album'),
}