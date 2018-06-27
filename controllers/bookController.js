var bookController = function(Book){
    var get = function (req, res) {
        //Filtering
        //var query = req.query;  //This is a generalised query
        var query = {};
        if (req.query.genre) {    //Check whether the query is for genre
            query.genre = req.query.genre
        }
        Book.find(query, function (err, books) {
            if (err)
                res.status(500).send(err);
            else{
                var returnBooks = [];
                books.forEach(function(element, index, array) {
                    var newBook = element.toJSON();
                    newBook.links = {};
                    newBook.links.self = 'http://' + req.headers.host + '/api/books/' + newBook._id;
                    returnBooks.push(newBook);
                });
                res.json(returnBooks);
            }
        });
    };
    var post = function (req, res) {
        var book = new Book(req.body);
        book.save();
        res.send(book);
    };

    return {
        get: get,
        post: post
    }
};
module.exports = bookController;