var express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');

var app = express();
   
var db = mongoose.connect('mongodb://localhost/libraryApp');

var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var Book = require('./models/bookModel');
var bookRouter = require('./routes/bookRoutes')(Book);

app.use('/api/books', bookRouter);

app.get('/', function (req, res) {
    res.send('Welcome to my API..');
});


app.listen(port, function () {
    console.log('Server is running at port: ' + port);
});