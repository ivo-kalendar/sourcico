const express = require('express');
const path = require('path');
const app = express();

// Init Middleware
app.use(express.json({ extended: false }));
app.use('/static', express.static(path.join(__dirname, 'public')));

// Define Routes
app.use('/api/authors', require('./routes/authorsdb'));
app.use(
    '/api/books',
    require('./routes/titlesdb'),
    require('./routes/seriesdb')
);

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));

    app.use('*', (req, res) =>
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    );
}

const PORT = process.env.PORT || 7788;

app.listen(PORT, () => console.log(`Server started on port  ${PORT}`));
