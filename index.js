const express = require('express');
const app = express();

const quotes = require('./api/quotes.json');

app.get('/', (req, res) => {
  res.json(quotes);
});

app.listen(3000, () => {
  console.log('API listening on port 3000');
});