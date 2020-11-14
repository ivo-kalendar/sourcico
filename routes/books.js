const express = require('express');
const router = express.Router();

// @route   GET api/books/title/:title
// @des     Get all objects of the books that matched the title
// @access  obj.books.title && obj.name
router.get('/title/:title', (req, res) => {
    res.json({
        file: 'books.js',
        req: 'GET',
        msg: 'Get all objects of the books that matched the title.',
    });
});

// @route   GET api/books/series/:series
// @des     Get all objects of the books that matched the series
// @access  obj.books.series && obj.name && obj.books.seriesTitle
router.get('/series/:series', (req, res) => {
    res.json({
        file: 'books.js',
        req: 'GET',
        msg: 'Get all objects of the books that matched the series',
    });
});

module.exports = router;
