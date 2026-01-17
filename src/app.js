//defining variables
const dotenv = require('dotenv');
dotenv.config();
const pool = require('./model/pool');
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const indexRoutes = require('./routes/indexroutes.js');
const messageRoutes = require('./routes/messageroutes.js');


// EJS setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware for form data
app.use(express.urlencoded({ extended: true }));
app.use("/assets", express.static(path.join(__dirname, "assets")));
app.use(express.json());

app.use('/', indexRoutes);
app.use('/messages', messageRoutes);

//running server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
