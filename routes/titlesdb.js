const express = require('express');
const router = express.Router();
const data = require('../config/db');

// @data    change the datastructure for the title routes
class Titles {
    constructor(book, author) {
        this.book = book;
        this.author = author;
    }
}

let author = data.map((author) => author);
let books = [];
for (let i = 0; i < author.length; i++) {
    for (let j = 0; j < author[i].books.length; j++) {
        books.push(new Titles(author[i].books[j], author[i].name));
    }
}

// @route   GET api/books/title
// @des     Get all objects of the books in the database
// @access  obj.books.title && obj.name
router.get('/title', (req, res) => {
    res.status(200).json(books);
});

// @route   GET api/books/title/:title
// @des     Get all objects of the books that matched the title
// @access  obj.books.title && obj.name
router.get('/title/:title', (req, res) => {
    let regExp = new RegExp(req.params.title, 'gi');

    finalBooks = books
        .map((x) => {
            if (x.book.title.match(regExp)) {
                return x;
            }
        })
        .filter((x) => x != null);

    res.status(200).json(finalBooks);
});

module.exports = router;
