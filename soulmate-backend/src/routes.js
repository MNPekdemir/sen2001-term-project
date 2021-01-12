const express = require('express');
const userRoute = require('./modules/user/routes');
const categoryRoute = require('./modules/category/routes');

const app = express();

/* home page. */
app.get('/', (req, res) => {
  res.send('Hello!');
});

app.use('/user', userRoute);
app.use('/category', categoryRoute);

module.exports = app;
