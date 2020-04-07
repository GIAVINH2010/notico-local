const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const aptAPI = require('./router/apt');
const aptRouter = require('./router/page/apt');

const app = express();
const port = 5000;

// setup mongodb
// require('./mongodb');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.use('/public', express.static(path.join(__dirname, 'public')));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// setup the routes
app.use('/api/v1', aptAPI);
app.use('/apt', aptRouter);

app.listen(port, () => console.log(`[SERVER] listening on port ${port}`));