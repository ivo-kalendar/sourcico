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
let booksArr1 = [];

data.map((author) => {
    author.books.map((b) => {
        if (b.series) {
            booksArr1.push({
                id: `${author.id}${b.id}`,
                title: b.title,
                series: b.series,
                author: author.name,
                titles: [],
            });
        }
        return booksArr1;
    });
});

let booksArr2 = booksArr1;

booksArr1.map((a) => {
    booksArr2.map((b, i) => {
        if (a.series === b.series) {
            booksArr2.push({
                id: i,
                series: b.series,
                titles: a.titles.push(b.title),
            });
        }
    });
    return booksArr2;
});

let booksArr3 = [];

for (let i = 0; i < booksArr2.length; i++) {
    booksArr3.push(booksArr2[i].series);
}

let booksArr4 = booksArr2.filter(
    (item, index) => booksArr3.indexOf(item.series) === index
);

let filteredArr = [];

booksArr4.map((el) => {
    filteredArr.push({
        id: el.id,
        series: el.series,
        author: el.author,
        titles: el.titles,
    });
});

// @route   GET api/books/series/
// @des     Get all objects of the books and map new objects
// @access  obj.books.series && obj.name && obj.books.seriesTitle
router.get('/series', (req, res) => {
    res.status(200).json(filteredArr);
});

// @route   GET api/books/series/:series
// @des     Get all objects of the books that matched the series
// @access  obj.books.series && obj.name && obj.books.seriesTitle
router.get('/series/:series', (req, res) => {
    let regExp = new RegExp(req.params.series, 'gi');

    filteredArr = filteredArr
        .map((obj) => {
            if (obj.series.match(regExp)) {
                return obj;
            }
        })
        .filter((x) => x != null);

    res.status(200).json(filteredArr);
});

module.exports = router;
