/* eslint-disable camelcase */
const faker = require('faker');
const knex = require('knex')({
  client: 'mysql',
  // connection: {
  //   host: 'db',
  //   port: '3306',
  //   user: 'root',
  //   password: 'password',
  //   database: 'dropApp'
  // }
  connection: {
    host: 'localhost',
    user: 'root',
    // password: 'password',
    database: 'dropApp'
  }
});

const getRandomColor = () => {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const createFakeUser = () => ({
  user_name: faker.internet.userName(),
  thumbnail: getRandomColor(),
});

const createFakeReview = () => ({
  product_id: faker.random.number({min: 0, max: 5}),
  user_id: faker.random.number({min: 1, max: 100}),
  review_date: faker.date.past(),
  header: faker.lorem.sentence(3),
  review_text: faker.lorem.paragraph(3, 3),
  rating: faker.random.number({min: 3, max: 5}),
  would_recommend: faker.random.boolean()
});



var seed = function() {
  const fakeUsers = [];
  const fakeReviews = [];
  const numOfFakeReviews = 100;
  for (var i = 0; i < numOfFakeReviews; i ++) {
    fakeUsers.push(createFakeUser());
    fakeReviews.push(createFakeReview());
  }

  knex('users')
    .insert(fakeUsers)
    .then(() => {
      console.log('inserting users');
    })
    .catch((err) => {
      console.error(err);
    })
    .then(() => {
      return knex('reviews')
        .insert(fakeReviews)
        .then((data) => {
          console.log('inserting reviews');
        })
        .catch((err) => {
          console.error(err);
        });
    });
};

module.exports = {
  seed,
  // createFakeReview
};