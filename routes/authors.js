const express = require('express');
const router = express.Router();
const data = require('../config/db');

// @route   GET api/authors/name/:name
// @des     Get all users that matched the name
// @access  author.name && author.books.length
router.get('/name/:name', (req, res) => {
    let regExp = new RegExp(req.params.name, 'gi');

    const matchResult = data.map((author) => {
        let matchName = author.name.match(regExp);
        if (matchName) {
            let auth = {
                author: author.name,
                books: author.books.length,
            };
            return auth;
        }
    });
    let authorsArr = matchResult.filter((x) => x != null);

    res.status(200).json({
        matchResult: authorsArr.length,
        authorsArr,
    });
});

// @route   GET api/authors/id/:id
// @des     Get single author by id and return all of his data
// @access  author
router.get('/id/:id', (req, res) => {
    const matchResult = data.map((author) => {
        if (req.params.id === author.id.toString()) return author;
    });
    let authorProfile = matchResult.filter((x) => x != null);

    res.status(200).json(authorProfile);
});

module.exports = router;
