const express = require('express');
const router = express.Router();
const data = require('../config/db');

// @route   GET api/books/title/:title
// @des     Get all objects of the books that matched the title
// @access  obj.books.title && obj.name
router.get('/title/:title', (req, res) => {
    let regExp = new RegExp(req.params.title, 'gi');
    let author = data.map((author) => author);
    let books = [];

    for (let i = 0; i < author.length; i++) {
        for (let j = 0; j < author[i].books.length; j++) {
            books.push({
                title: author[i].books[j].title,
                name: author[i].name,
            });
        }
    }

    books = books.map((book) => {
        if (book.title.match(regExp)) {
            return book;
        }
    });

    books = books.filter((x) => x != null);

    res.status(200).json({
        matchResult: books.length,
        books,
    });
});

// @route   GET api/books/series/:series
// @des     Get all objects of the books that matched the series
// @access  obj.books.series && obj.name && obj.books.seriesTitle
router.get('/series/:series', (req, res) => {
    let regExp = new RegExp(req.params.series, 'gi');
    let author = data.map((author) => author);
    let books = [];

    for (let i = 0; i < author.length; i++) {
        for (let j = 0; j < author[i].books.length; j++) {
            books.push({
                series: author[i].books[j].series,
                title: author[i].books[j].title,
                name: author[i].name,
            });
        }
    }

    books = books.map((book) => {
        if (book.series && book.series.match(regExp)) {
            return book;
        }
    });

    books = books.filter((x) => x != null);

    res.status(200).json({
        matchResult: books.length,
        books,
    });
});

module.exports = router;
