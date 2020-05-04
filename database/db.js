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


// assumes user is already 'signed in'
// uses hardcoded default user: ShawnChambers
const addReview = function(review, cb) {
  knex.transaction((trx) => {
    return trx
      .select().table('users').where('user_name', review.user_name)
      .then((user_id) => {
        delete review.user_name;
        review.user_id = user_id[0].user_id;
        return trx('reviews').insert(review);
      })
      .catch((err) => {
        console.error(err);
      });
  });
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
  knex.select().table('reviews').where('product_id', productId['product_id'].toString())
    .leftJoin('users', {'reviews.user_id': 'users.user_id'})
    .orderBy('review_id', 'desc')
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