const knex = require('knex')({
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    user: 'root',
    password: 'password',
    database: 'dropApp'
  }
});
// const seed = require('/seeding');

// const seedReviews = function() {
//   seed();
// }

const addReview = function(review, cb) {
  console.log('in addReview', review);
  knex('reviews').insert(review)
    .then((review) => {
      console.log(`inserted ${review} into reviews table`);
    })
    .catch((err) => {
      cb(err);
    });
}

const getReviews = function(cb) {
  knex.select().table('reviews').orderBy('review_date', 'desc')
    .then((data) => {
      cb(data);
    })
    .error((err) => {
      cb(err);
    })
}

module.exports = {
  getReviews,
  addReview
}