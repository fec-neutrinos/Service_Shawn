/* eslint-disable func-style */
import Review from './Review.jsx';
import styled from 'styled-components';

var Line = styled.div`
  .line {
    width: 97%;
    height: 20px;
    border-top: 1px solid #9f9e9e;
    margin-top: 100px;
    margin-left: 12px;
  }
`;

function Reviews(props) {
  return (
    <>
      <Line>
        <div className="line"></div>
      </Line>
      <Review reviews={props.reviews} />
    </>
  );
}


export default Reviews;