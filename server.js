const express = require('express');
const app = express();

// Get DataBase File

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

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port  ${PORT}`));
