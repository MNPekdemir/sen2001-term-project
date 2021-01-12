require('dotenv').config();
require('./db');

const express = require('express');
const { cors } = require('./config');

const app = express();
cors(app);

const port = process.env.PORT || 8080;
const apiRoutes = require('./src/routes');

app.use(express.json());
app.get('/', (req, res) => res.send('SoulMate API'));

app.use('/api', apiRoutes);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening at localhost:${port}`);
});
