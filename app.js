const express = require('express');
const bodyParser = require('body-parser');

const indexRouter = require('./router/index');

const app = express();
const port = 5000;

// setup mongodb
// require('./mongodb');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// setup the routes
app.use('/', indexRouter);

app.listen(port, () => console.log(`[SERVER] listening on port ${port}`));