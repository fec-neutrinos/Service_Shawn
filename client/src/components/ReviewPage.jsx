import $ from 'jquery';
import StarAverage from './StarAverage.jsx';
import WouldRecommendAverage from './WouldRecommendAverage.jsx';
import Reviews from './Reviews.jsx';
import UserReview from './UserReview.jsx';
import React from 'react';
import styled from 'styled-components';

var Grid = styled.div`
  .container {
    display: grid,
    grid-template-rows: [row1-start] 15px [row1-end] auto;
  }
`;

var DynamicUnderline = styled.div`
  div {
    color: black; display:inline-block;
    text-transform: uppercase;
    font-family: Stratos Web;
    font-weight: 500;
    font-size: 16px;
    line-height: 21px;
    margin: 4px 0px 4px 12px;
  }
  div:after {
    display:block;
    content: '';
    border-bottom: solid 4px #fdcf41;
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
  }
  div.fromLeft:after {
    transform-origin: 0% 50%;
  }
  div.fromLeft:hover:after {
    transform: scaleX(1);
    transform-origin:   0% 50%;
  }
  div.selected {
    display:block;
    content: '';
    border-bottom: solid 5px #fdcf41;
  }
  div.focus {
    display:block;
    content: '';
    border-bottom: solid 5px #fdcf41;
  }
  .topCount {
    font-family: gordita;
    vertical-align: super;
    margin-left: 5px;
    font-size: 8px;
    line-height: 16px;
  }
`;

var Stylings = styled.div`
  font-family: Helvetica,Arial,Verdana,sans-serif;
  hr {
    color: #9f9e9e;
  }
  .title {
    font-family: Stratos Web;
    text-align: center;
    font-size: 22px;
    font-weight: bold;
    line-height: 34px;
  }
  .subtitle {
    font-family: gordita;
    text-align: center;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    margin: 5px 0px 0px 0px;
  }
  .average {
    margin: 20px 0px 5px 0px;
  }

`;

class ReviewPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      averageReview: '',
      averageWouldRecommend: '',
      productId: '',
    };
    this.findAverageReview = this.findAverageReview.bind(this);
    this.findAverageRecommend = this.findAverageRecommend.bind(this);
  }

  findAverageRecommend(reviews) {
    var total = 0;
    reviews.forEach((review) => {
      total += (review.would_recommend);
    });
    return (total / reviews.length * 100).toFixed(0);
  }

  findAverageReview(reviews) {
    var total = 0;
    reviews.forEach((review) => {
      total += review.rating;
    });
    return (total / reviews.length).toFixed(1);
  }

  componentDidMount() {
    this.getReviewData();
  }

  getReviewData() {
    let productId = (window.location.pathname).substring(1);

    // let productId = 1;

    let url = `http://localhost:3030/${productId}/reviews`;
    $.ajax({
      url: url,
      type: 'GET',
      dataType: 'json',
      success: (data) => {
        console.log('data from get', data);
        this.setState({
          reviews: data,
          averageReview: this.findAverageReview(data),
          averageWouldRecommend: this.findAverageRecommend(data)
        });
      }
    });
  }

  render() {

    return (
      <>
      <Grid>
        <Stylings>
          <DynamicUnderline>
            <div>
              <div className="fromLeft">REVIEWS</div>   <span className="topCount">{this.state.reviews.length !== 0 ? this.state.reviews.length : ''}</span>
            </div>
          </DynamicUnderline>
          <div>
            <div className="title"> HERE'S WHAT OUR COMMUNITY HAS TO SAY </div>
            <div className="subtitle"> All of our reviews are from verified customers. </div>
          </div>
          <StarAverage className="average" reviewsAverage={this.state.averageReview} totalReviews={this.state.reviews.length}/>
          <WouldRecommendAverage averageRecommend={this.state.averageWouldRecommend}/>
          <UserReview getReviews={this.getReviewData}/>
          <Reviews reviews={this.state.reviews}/>
        </Stylings>
      </Grid>
      </>
    );
  }
}

export default ReviewPage;