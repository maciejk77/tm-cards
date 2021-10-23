const express = require('express');
const app = express();
const cards = require('./data/credit_cards.json');

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.get('/', (_, res) => {
  res.json(cards);
});

app.listen(8080, () => {
  console.log('Listening on port 8080!');
});
