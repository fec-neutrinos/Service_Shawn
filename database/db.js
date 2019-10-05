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

const getReviews = function(cb) {
  knex.select().table('reviews')
    .then((data) => {
      cb(data);
    })
    .error((err) => {
      cb(err);
    })
}

module.exports = {
  getReviews
}