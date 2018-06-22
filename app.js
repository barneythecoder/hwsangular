const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

// Connect to DB

mongoose.connect(config.database);
mongoose.connection.on('connected',()=>{
    console.log('Connected to database '+config.database);
});

mongoose.connection.on('error',(err)=>{
    console.log('DB Error '+err);
});

const app = express();
const users = require('./routes/users');
const admin = require('./routes/admin');
const mail = require('./routes/mail');

// Port Number
const port = process.env.PORT || 8080;

// CORS Middleware
app.use(cors());
 
// Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.json());

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

// Users Route
app.use('/users', users);

// Admin Route
app.use('/admin', admin);

// Mail Route
app.use('/mail', mail)

app.use(function(req, res) {
    res.sendFile(path.join(__dirname, '/public', 'index.html'));
});

// Index Route
app.get('/', (req, res)=>{
    res.send('Invalid enpoint');
});



app.listen(port, ()=>{
    console.log("Server started on port "+port);
});