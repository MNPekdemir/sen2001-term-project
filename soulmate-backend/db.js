/* eslint-disable no-console */
const mongoose = require('mongoose');
const { initiateMock } = require('./src/utils/utils');

const url = process.env.MONGODB_URI || 'mongodb://localhost:27017/dev';

console.log('DB_URL is: ', url);

const connectWithRetry = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('Mongoose Connected Succesfully.');
      initiateMock();
    })
    .catch((error) => console.warn('Error:', error));
};

connectWithRetry();
