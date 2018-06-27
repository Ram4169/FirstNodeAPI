var mongoose = require('mongoose'), schema = mongoose.Schema;
//Define model for the database to get the data in this format
var bookModel = new schema({
    title: {
        type: String
    },
    author: {
        type: String
    },
    genre: {
        type: String
    },
    read: {type: Boolean, default: false}
});

module.exports = mongoose.model('Book', bookModel);