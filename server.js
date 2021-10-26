const express = require('express');
const app = express();
const cards = require('./data/credit_cards.json');
const customers = require('./data/customer_test_data.json');

app.use((_, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.get('/cards', (_, res) => {
  res.json(cards);
});

app.get('/customers', (_, res) => {
  res.json(customers);
});

app.listen(8080, () => {
  console.log('Listening on port 8080!');
});
