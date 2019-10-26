/* eslint-disable func-style */
import styled from 'styled-components';


function StarAverage(props) {

  var Average = styled.div`
    text-align: center;
    font-weight: bold;
    font-size: 64px;
    line-height: 1.2;
    font-family: Stratos Web;
  `;

  var Stars = styled.div`
    unicode-bidi: bidi-override;
    font-size: 24px;
    height: 25px;
    width: 120px;
    margin: 0 auto;
    position: relative;
    padding: 0;
    font-family: 'Material Icons';
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
    .total {
      font-family: gordita;
      font-weight: 400;
      font-size: 12px;
      line-height: 20px;
      padding: 6px;
    }
  `;

  return (
    <div>
      <Average>
        <div className="average">{props.reviewsAverage}</div>
      </Average>
      <Stars>
        <JudgyStars>
          <div><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
        </JudgyStars>
        <BlankStars>
          <div><span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span><span className="total">{(props.totalReviews > 0) ? props.totalReviews : ''}</span></div>
        </BlankStars>
      </Stars>
    </div>
  );
}

export default StarAverage;