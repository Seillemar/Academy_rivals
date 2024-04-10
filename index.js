const express = require('express');
const axios = require('axios');
const app = express();
const path = require('path');
const nodemailer = require('nodemailer');

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

app.use(express.urlencoded({ extended: true })); // pour parser les données du formulaire

app.post('/send-email', (req, res) => {
    let transporter = nodemailer.createTransport({
        sendmail: true,
        newline: 'unix',
        path: '/usr/sbin/sendmail'
    });

    let mailOptions = {
        from: req.body.email, // l'adresse e-mail de l'expéditeur sera celle fournie dans le formulaire
        to: 'braguettefield@gmail.com',
        subject: req.body.subject, // l'objet de l'e-mail sera celui fourni dans le formulaire
        text: `Message de ${req.body.firstName} ${req.body.lastName}: ${req.body.message}` // le corps de l'e-mail contiendra le message du formulaire
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.send('error'); // vous pouvez gérer les erreurs comme vous le souhaitez
        } else {
            console.log('Email envoyé: ' + info.response);
            res.send('success'); // vous pouvez gérer les succès comme vous le souhaitez
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
