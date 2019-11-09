const knex = require('knex')({
  client: 'mysql',
  // connection: {
  //   host: 'db',
  //   port: '3306',
  //   user: 'root',
  //   // password: 'password',
  //   database: 'dropApp'
  // }
  connection: {
    host: '127.0.0.1',
    user: 'root',
    password: 'password',
    database: 'dropApp'
  }
});

const addReview = function(review, cb) {
  knex('reviews').insert(review)
    .then((review) => {
      console.log(`inserted ${review} into reviews table`);
    })
    .error((err) => {
      console.log(err);
    });
};

const getReviews = function(productId, cb) {
  knex.select().table('reviews').where('product_id', productId['product_id'].toString()).orderBy('review_id', 'desc')
    .then((data) => {
      cb(data);
    })
    .error((err) => {
      cb(err);
    });
};

module.exports = {
  getReviews,
  addReview
};