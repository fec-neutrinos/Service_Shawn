/* eslint-disable func-style */
import styled from 'styled-components';


function StarAverage(props) {

  var Stars = styled.div`
    unicode-bidi: bidi-override;
    font-size: 25px;
    height: 25px;
    width: 125px;
    margin: 0 auto;
    position: relative;
    padding: 0;
  `;

  var JudgyStars = styled.div`
  padding: 0;
  width: ${((props.reviewsAverage / 5) * 100)}%;
    position: absolute;
    z-index: 1;
    display: block;
    top: 0;
    left: 0;
    overflow: hidden;
  `;

  var BlankStars = styled.div`
    padding: 0;
    display: block;
    z-index: 0;
  `;

  return (
    <div>
      <div>Average review of {props.reviewsAverage}</div>
      <Stars>
        <JudgyStars>
          <div><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
        </JudgyStars>
        <BlankStars>
          <div><span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span></div>
        </BlankStars>
      </Stars>
      <div>{(props.totalReviews > 0) ? props.totalReviews : ''}</div>
    </div>
  );
}

export default StarAverage;