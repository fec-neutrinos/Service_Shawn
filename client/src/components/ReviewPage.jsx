import $ from 'jquery';
import StarAverage from './StarAverage.jsx';
import WouldRecommendAverage from './WouldRecommendAverage.jsx';
import Reviews from './Reviews.jsx';

class ReviewPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      averageReview: '',
      averageWouldRecommend: ''
    }
    this.findAverageReview = this.findAverageReview.bind(this);
    this.findAverageRecommend = this.findAverageRecommend.bind(this);
  }

  findAverageRecommend(reviews) {
    var total = 0;
    reviews.forEach((review) => {
      total += (review.would_recommend);
    })
    return (total/reviews.length * 100).toFixed(0);
  }

  findAverageReview(reviews) {
    var total = 0;
    reviews.forEach((review) => {
      total += review.rating;
    })
    return (total/reviews.length).toFixed(1);
  }

  componentDidMount() {
    $.ajax({
      url: 'http://localhost:3030/product/reviews',
      type: 'GET',
      dataType: 'json',
      success: (data) => {
        var revs = [];
        data.forEach((entry) => {
          if (entry.product_id === 4) {
            revs.push(entry);
          }
        })
        this.setState({
          reviews: revs,
          averageReview: this.findAverageReview(revs),
          averageWouldRecommend: this.findAverageRecommend(revs)
        })
      }
    })
  }
  

  render() {
    return (
      <>
      <h1> hey hey ya'll </h1>
      <StarAverage reviewsAverage={this.state.averageReview} totalReviews={this.state.reviews.length}/>
      <WouldRecommendAverage averageRecommend={this.state.averageWouldRecommend}/>
      <Reviews reviews={this.state.reviews}/>
      </>
    )
  }
}

export default ReviewPage;