/* eslint-disable camelcase */
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
    // password: 'password',
    database: 'dropApp'
  }
});

const addReview = function(review, cb) {
  knex.transaction((trx) => {
    return trx
      .insert({user_name: review.user_name}).into('users')
      .then((user_id) => {
        delete review.user_name;
        review.user_id = user_id[0];
        return trx('reviews').insert(review);
      })
      .catch((err) => {
        console.error(err);
      });
  });
  // knex('reviews').insert(review)
  //   .then((review) => {
  //     console.log(`inserted ${review} into reviews table`);
  //   })
  //   .error((err) => {
  //     console.log(err);
  //   });
};

// const addReview = function(review, cb) {
//   knex('reviews').insert(review)
//     .then((review) => {
//       console.log(`inserted ${review} into reviews table`);
//     })
//     .error((err) => {
//       console.log(err);
//     });
// };

const getReviews = function(productId, cb) {
  knex.select().table('reviews').where('product_id', productId['product_id'].toString()).orderBy('review_id', 'desc')
    .then((data) => {
      cb(data);
    })
    .error((err) => {
      cb(err);
    });
};

// const getReviews = function(productId, cb) {
//   knex.select().table('reviews').where('product_id', productId['product_id'].toString()).orderBy('review_id', 'desc')
//     .then((data) => {
//       cb(data);
//     })
//     .error((err) => {
//       cb(err);
//     });
// };

module.exports = {
  getReviews,
  addReview
};