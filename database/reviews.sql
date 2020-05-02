DROP DATABASE IF EXISTS dropApp;

CREATE DATABASE dropApp;

-- CREATE LOGIN review WITH PASSWORD = '1234'

USE dropApp;

CREATE TABLE IF NOT EXISTS reviews (
  review_id INT AUTO_INCREMENT,
  user_id INT,
  product_id INT NOT NULL,
  review_date DATE,
  header VARCHAR(50),
  review_text TEXT,
  rating INT,
  would_recommend BOOLEAN,
  PRIMARY KEY(review_id),
  FOREIGN KEY(user_id)
    REFERENCES users (user_id)
    ON DELETE SET NULL
    ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS users (
  user_id INT PRIMARY KEY AUTO_INCRIMENT,
  user_name TEXT,
  thumbnail TEXT
);