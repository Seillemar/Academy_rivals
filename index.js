const express = require('express');
const axios = require('axios');
const app = express();
const path = require('path');

const port = 3000;

// Set the templates directory
app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'ejs'); // Use EJS as the template engine

// Middleware to serve static files (CSS, JS, images, etc.)
app.use('/styles', express.static(path.join(__dirname, 'templates', 'styles')));
app.use('/scripts', express.static(path.join(__dirname, 'templates', 'scripts')));
app.use('/images', express.static(path.join(__dirname, 'templates', 'images')));
app.use('/video', express.static(path.join(__dirname, 'templates', 'video')));

// Middleware to include header and footer on all pages
app.use((req, res, next) => {
    res.locals.header = 'partials/header'; // Define the header partial
    res.locals.footer = 'partials/footer'; // Define the footer partial
    res.locals.head = 'partials/head'; // Define the footer partial
    next();
});

app.get('/home', (req, res) => {
    res.render('home');
});


// Route for the staff page
app.get('/staff', (req, res) => {
    res.render('staff');
});

// Route for the contact page
app.get('/contact', (req, res) => {
    res.render('contact');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
