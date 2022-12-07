const express = require('express');
const app = express();

const quotes = require('./api/quotes.json');

app.get('/', (req, res) => {
  res.json(quotes);
});
//Get Bhagavadgita Quotes
app.get('/bg', (req, res) => {
  res.json(quotes.bg);
});
//Get stoic quotes
app.get('/stoic', (req, res) => {
  res.json(quotes.stoic);
});
// Get APJ Quotes
app.get('/apj', (req, res) => {
  res.json(quotes.apj);
});

app.listen(3000, () => {
  console.log('API listening on port 3000');
});
