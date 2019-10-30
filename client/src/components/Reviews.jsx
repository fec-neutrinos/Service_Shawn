/* eslint-disable func-style */
import Review from './Review.jsx';

function Reviews(props) {
  return (
    <>
      <hr></hr>
      <Review reviews={props.reviews} />
    </>
  );
}


export default Reviews;