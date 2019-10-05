const express = require('express');
const app = express();
const port = 3030;
const db = require('../database/db');

app.use(express.static('public'));

app.get('/product/reviews', (req, res) => {
  db.getReviews((data) => {
    res.send(data);
  })
});

app.listen(port, () => console.log(`listening on port ${port}`));