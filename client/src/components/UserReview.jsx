/* eslint-disable camelcase */
import $ from 'jquery';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';


const Post = styled.div`
  .button {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  }
`;

const Rating = styled.div`
  .rating {
    unicode-bidi: bidi-override;
    direction: rtl;
  }
  .rating > span {
    display: inline-block;
    position: relative;
    width: 1.1em;
  }
  .rating > span:hover:before,
  .rating > span:hover ~ span:before {
    content: '★';
    position: absolute;
  }
`;

const Text = styled.div`
  .header {
    height: 18px;
    width: 90%
    font-size: 12pt;
    font-family: gordita;
    padding: 10px 12px;
    resize: none;
    margin: 10px 10px 20px 40px;
  }
  .text {
    height: 70px;
    vertical-align: top;
    width: 90%
    font-size: 12pt;
    font-family: gordita;
    padding: 10px 12px;
    resize: none;
    margin: 0px 10px 20px 40px;
  }
`;

class UserReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_name: '',
      product_id: '',
      review_date: '',
      header: '',
      review_text: '',
      rating: '',
      would_recommend: '',
      hasBeenReviewed: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleReview = this.handleReview.bind(this);
  }

  handleChange(event) {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    });
  }

  handleReview() {
    let productId = (window.location.pathname).substring(1);

    $.post(`http://localhost:3030/${productId}/submit_review`, {
      user_name: 'ShawnChambers',
      product_id: productId,
      review_date: '2019-10-30',
      header: 'This rocks yo',
      review_text: 'No really, it\'s the bee\'s knees',
      rating: '5',
      would_recommend: 1
    });
    // mock data for POST request
    this.setState({
      hasBeenReviewed: true
    });
  }

  render() {
    if (this.state.hasBeenReviewed) {
      return null;
    }
    return (
      <>
      <Rating>
        <div className="rating">
          <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
        </div>
      </Rating>
      <Text>
        <div>
          <textarea className="header" name='header' type='text' placeholder='What was your overall impression? (Optional)' onChange={this.handleChange}/>
        </div>
        <div>
          <textarea className="text" name='review_text' type='text' placeholder='Share your experience with the product. What did you like or dislike? (Optional)' onChange={this.handleChange}/>
        </div>
      </Text>
        <div>Would you recommend this product to a friend? (Optional)</div>
        <Post>
          <Button className="button" onClick={this.handleReview}>POST REVIEW</Button>
        </Post>
      </>
    );
  }

}


export default UserReview;