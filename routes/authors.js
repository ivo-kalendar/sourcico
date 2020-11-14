const express = require('express');
const router = express.Router();

// @route   GET api/authors/name/:name
// @des     Get all users that matched the name
// @access  author.name && author.books.length
router.get('/name/:name', (req, res) => {
    res.json({
        file: 'authors.js',
        req: 'GET',
        msg: 'Get all users that matched the authorname.',
    });
});

// @route   GET api/authors/id/:id
// @des     Get single author by id and return all of his data
// @access  author
router.get('/id/:id', (req, res) => {
    res.json({
        file: 'authors.js',
        req: 'GET',
        msg: 'Get single author by id and return all of his data.',
    });
});

module.exports = router;
