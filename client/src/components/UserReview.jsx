/* eslint-disable camelcase */
import $ from 'jquery';
import styled from 'styled-components';
import moment from 'moment';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import Grid from '@material-ui/core/Grid';

const Post = styled.div`
  button {
    font-family: Stratos Web;
    font-weight: 500;
    font-size: 15px;
    position: relative;
    align-content: center;
    align-items: center;
    width: 96px;
    height: 37px;
    margin-top: 12px;
    margin-left: 40px;
    background-color: #f0f0f0;
    border-color: #f0f0f0;
    box-sizing: border-box;
  }
  button:hover {
    background-color: #fdcf41;
  }
  button:focus {
    background-color: #fdcf41;
  }
  .clicked {
    background-color: #fdcf41;
  }
  .postButton {
    font-family: Stratos Web;
    font-weight: 500;
    font-size: 15px;
    color: #cccccc;
    position: relative;
    display: block;
    width: 120px;
    min-height: 45px;
    margin-top: 20px;
    margin-right: 4%;
    padding: 8px;
    background-color: #f0f0f0;
    border-color: #f0f0f0;
    box-sizing: border-box;
    float: right;
  }
  .icon {
    font-size: 22px;
    margin: 4px 4px 0px 0px;
  }
  .postButton:hover {
    background-color: #f0f0f0;
  }
  .postButton:focus {
    background-color: #f0f0f0;
  }
  .ready {
    font-family: Stratos Web;
    font-weight: 500;
    font-size: 15px;
    position: relative;
    display: block;
    width: 120px;
    min-height: 45px;
    margin-top: 20px;
    margin-right: 4%;
    padding: 8px;
    background-color: #f0f0f0;
    border-color: #f0f0f0;
    box-sizing: border-box;
    float: right;
  }
`;

const Question = styled.div`
  .question {
    font-family: gordita;
    margin: 10px 10px 10px 40px;
    font-size: 14px;
  }
`;

const Rating = styled.div`
  .title {
    font-family: Stratos Web;
    font-size: 22px;
    line-height: 18px;
    text-align: center;
    padding-bottom: 10px;
  }
  .rating {
    unicode-bidi: bidi-override;
    font-size: 22px
    direction: rtl;
    position: absolute;
    margin-left: 40px;
  }
  .rating > span {
    display: inline-block;
    position: relative;
  }
  .stars > span:hover:before,
  .stars > span:hover ~ span:before {
    content: '★';
    position: absolute;
  }
  .message {
    font-family: gordita;
    font-size: 14px;
    direction: ltr;
    padding-left: 15px;
  }
`;

const Text = styled.div`
  .header {
    height: 23px;
    width: 90%
    font-size: 12pt;
    font-family: gordita;
    padding: 10px 12px;
    resize: none;
    margin: 45px 10px 20px 40px;
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
    this.handleRating = this.handleRating.bind(this);
    this.wouldRecommend = this.wouldRecommend.bind(this);
    this.wouldNotRecommend = this.wouldNotRecommend.bind(this);
  }

  handleChange(event) {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    });
  }

  wouldRecommend() {
    this.setState({
      would_recommend: 1
    });
  }

  handleRating(event) {
    event.persist();
    event.preventDefault();
    const {className} = event.target;
    this.setState({
      rating: className.substring(4)
    });
  }

  wouldNotRecommend() {
    this.setState({
      would_recommend: 0
    });
  }

  handleReview() {
    let productId = (window.location.pathname).substring(1);

    $.ajax({
      url: `http://localhost:3030/${productId}/submit_review`,
      type: 'POST',
      data: {
        user_name: 'ShawnChambers',
        product_id: productId,
        review_date: moment().format().substring(0, 10),
        header: this.state.header,
        review_text: this.state.review_text,
        rating: this.state.rating,
        would_recommend: 1
      },
      success: () => {
        this.props.getReviews();
        this.setState({
          hasBeenReviewed: true
        });
      }
    });


  }

  render() {
    if (this.state.hasBeenReviewed) {
      return (
        // <div>Thanks for your review!</div>
        null
      );
    }
    // use ternary statements to evaluate component state and render stars
    return (
      <>
      <Rating>
        <div className="title">YOUR REVIEW</div>
        <div>
          <div className="rating" onClick={this.handleRating}>
            <span className="message">{this.state.rating > 3 ? 'Great, so glad you liked it!' : ''}{this.state.rating < 3 && this.state.rating !== '' ? 'We\'re sorry you had a bad experience!' : ''}</span>
            <span className="stars">
              <span className="star5">{this.state.rating >= 5 ? '★' : '☆'}</span><span className="star4">{this.state.rating >= 4 ? '★' : '☆'}</span><span className="star3">{this.state.rating >= 3 ? '★' : '☆'}</span><span className="star2">{this.state.rating >= 2 ? '★' : '☆'}</span><span className="star1">{this.state.rating >= 1 ? '★' : '☆'}</span>
            </span>

          </div>
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
      <Question>
        <div className="question">Would you recommend this product to a friend? (Optional)</div>
      </Question>
      <Post>
        <div>
          <span>
            <button className={this.state.would_recommend === 1 ? 'clicked' : ''} onClick={this.wouldRecommend}>
              <Grid container direction="row" alignItems="center" justify="center">
                <Grid item>
                  <CheckIcon className="icon"></CheckIcon>
                </Grid>
                <Grid item>
                YES
                </Grid>
              </Grid></button>
            <button className={this.state.would_recommend === 0 ? 'clicked' : ''} onClick={this.wouldNotRecommend} style={{marginLeft: '12px'}}>
              <Grid container direction="row" alignItems="center" justify="center">
                <Grid item>
                  <ClearIcon className="icon"></ClearIcon>
                </Grid>
                <Grid item>
                NO
                </Grid>
              </Grid></button>
          </span>
        </div>
        <button className={this.state.rating === '' ? 'postButton' : 'ready'} onClick={this.state.rating !== '' ? this.handleReview : null}>POST REVIEW</button>
      </Post>
      </>
    );
  }

}


export default UserReview;