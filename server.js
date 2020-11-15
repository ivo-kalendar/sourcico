const express = require('express');
const path = require('path');
const app = express();

// Get DataBase File

// Init Middleware
app.use(express.json({ extended: false }));
app.use('/static', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.json({
        msg: 'Welcome to the Authors Project',
        author: 'Ivo Kalendarov',
        mail: 'ivokalendar@icloud.com',
    });
});

// Define Routes
app.use('/api/authors', require('./routes/authors'));
app.use('/api/books', require('./routes/books'));

const PORT = process.env.PORT || 7788;

app.listen(PORT, () => console.log(`Server started on port  ${PORT}`));
