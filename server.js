//imports
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
require('dotenv').config();
require('./config/database');

//variables
const app = express();
const PORT  = process.env.PORT || 3001;

//middlewares
app.use(logger('dev'));
app.use(express.json());

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

app.use(require('./config/checkToken'));

//API routes here
app.use('/api/users', require('./routes/api/users'));
app.use('/api/exercise', require('./routes/api/exercise'));

//catch all route
//returns index.html for all routes that aren't api routes
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})


app.listen(PORT, ()=> {
    console.log(`Epress is running on ${PORT}`);
})