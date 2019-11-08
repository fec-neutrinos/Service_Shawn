/* eslint-disable func-style */
import Review from './Review.jsx';
import styled from 'styled-components';

var Line = styled.div`
  .line {
    width: 98%;
    height: 20px;
    border-top: 1px solid #9f9e9e;
    margin-top: 100px;
    margin-left: 12px;
  }
`;

var Reviewed = styled.div`
  margin-left: 3%;
  margin-right: 3%;
`;

function Reviews(props) {
  return (
    <>
      <Reviewed>
        <Line>
          <div className="line"></div>
        </Line>
        <Review reviews={props.reviews} />
      </Reviewed>
    </>
  );
}


export default Reviews;