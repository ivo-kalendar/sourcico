const express = require('express');
const router = express.Router();
const data = require('../config/db');

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
