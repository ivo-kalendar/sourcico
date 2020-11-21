const express = require('express');
const router = express.Router();
const data = require('../config/db');

// @route   GET api/books/title
// @des     Get all objects of the books in the database
// @access  obj.books.title && obj.name
router.get('/title', (req, res) => {
    let author = data.map((author) => author);
    let books = [];

    for (let i = 0; i < author.length; i++) {
        for (let j = 0; j < author[i].books.length; j++) {
            books.push({
                book: author[i].books[j],
                author: author[i].name,
            });
        }
    }

    res.status(200).json(books);
});

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
                book: author[i].books[j],
                author: author[i].name,
            });
        }
    }

    books = books.map((obj) => {
        if (obj.book.title.match(regExp)) {
            return obj;
        }
    });

    books = books.filter((x) => x != null);

    res.status(200).json(books);
});

// @data    change the datastructure for the series routes
class Series {
    constructor(id, series, title, author) {
        this.id = id;
        this.series = series;
        this.author = author;
        this.titles = title;
    }
}

let finalData = [];
let seriesArr = [];
let titlesArr = [];

data.map((author) => {
    author.books.map(({ title, series, id }, i) => {
        if (series) {
            seriesArr.push(series),
                titlesArr.push(new Series(id, series, title, author.name));
        }
    });
});

seriesArr = [...new Set(seriesArr)];

seriesArr.every((val) => {
    let titles = [];
    let author;
    let id;
    for (let i = 0; i < titlesArr.length; i++) {
        if (val === titlesArr[i].series) {
            titles.push(titlesArr[i].titles);
            author = titlesArr[i].author;
            id = titlesArr[i].id;
        }
    }
    finalData.push(new Series(id, val, titles, author));
    return val;
});

// @route   GET api/books/series/
// @des     Get all objects of the books and map new objects
// @access  obj.books.series && obj.name && obj.books.seriesTitle

router.get('/series', (req, res) => {
    res.status(200).json(finalData);
});

// @route   GET api/books/series/:series
// @des     Get all objects of the books that matched the series
// @access  obj.books.series && obj.name && obj.books.seriesTitle
router.get('/series/:series', (req, res) => {
    let regExp = new RegExp(req.params.series, 'gi');

    matchData = finalData.map((obj) => {
        if (obj.series.match(regExp)) return obj;
    });

    matchData = matchData.filter((x) => x != null);

    res.status(200).json(matchData);
});

module.exports = router;
