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

// Middleware to include header and footer on all pages
app.use((req, res, next) => {
    res.locals.header = 'partials/header'; // Define the header partial
    res.locals.footer = 'partials/footer'; // Define the footer partial
    next();
});

app.get('/home', (req, res) => {
    res.render('home');
});

// Route for the brackets page
app.get('/planning-bracket', async (req, res) => {
    try {
        // Code to retrieve tournament data from Challonge API
        const response = await axios.get('https://api.challonge.com/v1/tournaments/snib5or9.json', {
            auth: {
                username: 'Seillemar',
                password: '5G41TwoPtpUfCoQmrtf0NumYwoKGXO5fHYQf1TfK', // Needed 'x' as password for API key authentication
            },
        });
        const tournamentData = response.data;

        console.log('Tournament data:', tournamentData)

        // Code to render the bracket page and pass tournament data to the view
        res.render('planning-bracket', { tournamentData });
    } catch (error) {
        console.error('Error fetching tournament data:', error);
        res.status(500).send('Error fetching tournament data');
    }
});

// Route for the VODs page
app.get('/vods', (req, res) => {
    res.render('vods');
});

// Route for the partners page
app.get('/partenaires', (req, res) => {
    res.render('partenaires');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
