/* eslint-disable func-style */
import React from 'react';
import styled from 'styled-components';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ReplyIcon from '@material-ui/icons/Reply';
import ShareIcon from '@material-ui/icons/Share';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Grid from '@material-ui/core/Grid';

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

var Layout = styled.div`
  .container {
    display: inline-grid;
    grid-template-columns: [left-border] 10px [name-circle] 20px [name-space] 10px auto[right-border] 10px;
    grid-template-rows: [top-border] 10px [name-circle-row] 20px auto;
    grid-template-areas:
      ". circle . user .";
  }
`;

var ReviewStyle = styled.div`
  {
    margin-left: 12px;
  }
  .stars {
    font-family: 'Material Icons';
    font-weight: bold;
    font-size: 20px;
    margin-top: 15px;
  }
  .user {
    grid-area: user
    font-family: gordita;
    display: table-cell;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    margin-top: 15px;
    margin-left: 15px;
    padding-left: 12px;
    padding-top: 4px;
  }
  .header {
    font-family: gordita;
    font-size: 16px;
    line-height: 22px;
    font-weight: 500;
    margin-top: 16px;
  }
  .text {
    font-family: gordita;
    font-weight: 400;
    line-height: 1.6;
    font-size: 14px;
    margin-top: 16px;
    margin-bottom: 20px;
  }
  .circle {
    grid-area: cirlce
    height: 25px;
    width: 25px;
    display: table-cell;
    text-align: center;
    color: white;
    vertical-align: middle;
    border-radius: 50%;
    margin-right: 10px;
  }
  .check {
    font-size: 8px;
    height: 15px;
    width: 15px;
    text-align: center;
    vertical-align: middle;
    border-radius: 50%;
    background: #fdcf41;
    margin-right: 10px
  }
  .recommend {
    font-family: gordita;
    font-size: 12px;
    line-height: 20px;
    margin-top: 15px;
  }
  .optionMenu {
    font-family: gordita;
    font-size: 12px;
    line-height: 20px;
    color: #dcdcdc;
    margin-right: 15px
  }
  .optionMenu > span:hover {
    color: #fdcf41;
  }
  .icon {
    margin-top: 15px;
    size: 8px
  }
  .line {
    width: 98.5%;
    height: 20px;
    border-top: 1px solid #9f9e9e;
    margin-top: 20px;
  }
  `;

function Review(props) {
  return (
    <>
      {props.reviews.map(review => (
        <Layout>
          <ReviewStyle>
            <div className="grid">
              <div>

                <span className="circle" style={{backgroundColor: getRandomColor()}}>{review.user_name.substring(0, 1)}</span>

                <span className="user">{review.user_name}</span>
              </div>
              <div className="stars">{'★ '.repeat(review.rating).concat('☆ '.repeat(5 - review.rating))}</div>
              <div className="header">{review.header}</div>
              <div className="text">{review.review_text}</div>
              <div><span>{(review.would_recommend > 0) ? <CheckIcon className="check"></CheckIcon> : <ClearIcon className="check"></ClearIcon>}</span><span className="recommend">Would {review.would_recommend > 0 ? '' : 'not '}recommend to a friend.</span></div>
              <div className="optionMenu"><span>Helpful?</span><span className="icon"><ThumbUpIcon></ThumbUpIcon></span><span><ReplyIcon className="icon"></ReplyIcon>REPLY</span><span className="icon"><BookmarkBorderIcon></BookmarkBorderIcon></span><span className="icon"><ShareIcon></ShareIcon></span><span className="icon"><MoreVertIcon></MoreVertIcon></span></div>
            </div>
            <div className="line"></div>
          </ReviewStyle>
        </Layout>
      ))}
    </>
  );
}

export default Review;