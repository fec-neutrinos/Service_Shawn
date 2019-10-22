import $ from 'jquery';
import StarAverage from './StarAverage.jsx';
import WouldRecommendAverage from './WouldRecommendAverage.jsx';
import Reviews from './Reviews.jsx';
import UserReview from './UserReview.jsx';
import React from 'react';
import styled from 'styled-components';

// var Header = styled.div`
//   background-color: cornflowerblue
// `;

class ReviewPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      averageReview: '',
      averageWouldRecommend: '',
      productId: ''
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
    let productId = (window.location.pathname).substring(1);

    // let productId = 1;

    let url = `http://localhost:3030/${productId}/reviews`;
    $.ajax({
      url: url,
      type: 'GET',
      dataType: 'json',
      success: (data) => {
        console.log('data from get', data)
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
      {/* <Header> */}
        <h1> hey hey ya'll want some reviews yo? </h1>
        <StarAverage reviewsAverage={this.state.averageReview} totalReviews={this.state.reviews.length}/>
        <WouldRecommendAverage averageRecommend={this.state.averageWouldRecommend}/>
        <UserReview/>
        <Reviews reviews={this.state.reviews}/>
      {/* </Header> */}
      </>
    );
  }
}

export default ReviewPage;