DROP DATABASE IF EXISTS dropApp;

CREATE DATABASE dropApp;

USE dropApp;

CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_name VARCHAR(15),
  review_id INT
  -- PRIMARY KEY(id),
  -- FOREIGN KEY(review_id) REFERENCES reviews(id)
);

CREATE TABLE IF NOT EXISTS reviews (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  header VARCHAR(25),
  review_text VARCHAR(200),
  rating INT,
  would_recommend BOOLEAN
  -- PRIMARY KEY(id),
  -- FOREIGN KEY(user_id) REFERENCES users(id)
);


insert INTO reviews (user_id, header, review_text, rating, would_recommend) VALUES (1, 'so dope', 'this is the thing I had no idea I needed', 5, true);

insert INTO reviews (user_id, header, review_text, rating, would_recommend) VALUES (2, 'booo', 'booooooooooooooooom goes the dynamite', 1, false);
