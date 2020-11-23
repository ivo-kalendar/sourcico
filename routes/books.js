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

// @data    change the datastructure for the series routes
class Series {
    constructor(series, title, id, author) {
        this.series = series;
        this.titles = { id, title, author };
    }
}

class Final {
    constructor(series, titles) {
        this.series = series;
        this.titles = titles;
    }
}

let finalData = [];
let seriesArr = [];
let titlesArr = [];

data.map((author) => {
    author.books.map(({ title, series, id }) => {
        if (series) {
            seriesArr.push(series),
                titlesArr.push(new Series(series, title, id, author.name));
        }
    });
});

seriesArr = [...new Set(seriesArr)];

seriesArr.every((val) => {
    let titles = [];
    for (let i = 0; i < titlesArr.length; i++) {
        if (val === titlesArr[i].series) {
            titles.push(titlesArr[i].titles);
        }
    }
    finalData.push(new Final(val, titles));
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
