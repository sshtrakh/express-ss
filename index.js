const express = require('express');
const path = require('path');
const {json} = require("express");

const app = express();

// Body parser middleware
app.use(express.json()); // to handle json
app.use(express.urlencoded({ extended: false })); // to handle forms

const PORT = 5000;
app.use(express.static(path.join(__dirname, 'public')));


//Members API routes
app.use('/api/members', require('./routes/api/members'));

app.listen(PORT, () => {
    `Server ${PORT} is running...`
});
