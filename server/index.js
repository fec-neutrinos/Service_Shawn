const express = require('express');
const app = express();
const port = 3030;
const bodyParser = require('body-parser');
const db = require('../database/db');

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/product/reviews', (req, res) => {
  console.log('get recieved');
  db.getReviews((data) => {
    // console.log(data);
    res.send(data);
  })
});

app.post('/product/submit_review', (req, res) => {
  console.log('post recieved');
  db.addReview(req.body, () => {
    console.log(err);
    res.end();
  });
});

app.listen(port, () => console.log(`listening on port ${port}`));