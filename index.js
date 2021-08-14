const express = require('express');
const path = require('path');

const app = express();

const PORT = 5000;
app.use(express.static(path.join(__dirname, 'public')));


//Members API routes
app.use('/api/members', require('./routes/api/members'));

app.listen(PORT, () => {
    `Server ${PORT} is running...`
});
