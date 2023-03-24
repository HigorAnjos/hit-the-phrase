const express = require('express');
const cors = require('cors');
// const root = require('./routes');

require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/', () => { console.log('Hello World')});

module.exports = app;
