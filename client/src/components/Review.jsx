/* eslint-disable func-style */
import React from 'react';
import styled from 'styled-components';

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

var ReviewStyle = styled.div`
  .stars {
    font-family: 'Material Icons';
    font-weight: bold;
    font-size: 20px;
    margin-top: 15px;
  }
  .user {
    font-family: gordita;
    display: table-cell;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    margin-top: 15px;
  }
  .header {
    font-family: gordita;
    font-size: 16px;
    line-height: 22px;
    font-weight: 500;
    margin-top: 15px;
  }
  .text {
    font-family: gordita;
    font-weight: 400;
    line-height: 1.6;
    font-size: 14px;
    margin-top: 15px;
  }
  .circle {
    height: 25px;
    width: 25px;
    display: table-cell;
    text-align: center;
    color: white;
    vertical-align: middle;
    border-radius: 50%;
    background: ${getRandomColor()};
  }
`;

function Review(props) {
  return (
    <>
      {props.reviews.map(review => (
        <div>
          <ReviewStyle>
            <div>
              <span className="circle">{review.user_name.substring(0, 1)}</span><span className="user">{review.user_name}</span>
            </div>
            <div className="stars">{'★ '.repeat(review.rating).concat('☆ '.repeat(5 - review.rating))}</div>
            <div className="header">{review.header}</div>
            <div className="text">{review.review_text}</div>
          </ReviewStyle>
          <hr/>
        </div>
      ))}
    </>
  );
}

export default Review;