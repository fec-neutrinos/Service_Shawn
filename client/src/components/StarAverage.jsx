/* eslint-disable func-style */
import styled from 'styled-components';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Ratings from 'react-ratings-declarative';


function StarAverage(props) {

  var Average = styled.div`
    text-align: center;
    font-weight: bold;
    font-size: 64px;
    line-height: 1.2;
    font-family: Stratos Web;
  `;

  var Stars = styled.div`
    display: flex;
    justify-content: center;
    unicode-bidi: bidi-override;
    font-size: 24px;
    height: 30px;
    width: 400px;
    margin: 0 auto;
    padding: 0;
    font-family: 'Material Icons';
    .total {
      font-family: gordita;
      font-weight: 400;
      font-size: 12px;
      line-height: 20px;
      padding: 6px;
    }
    .widget-container {
      width: 25px;
      position: absolute;
      display: block;
      top: 0;
      left: 0;
    }
  `;

  return (
    <div>
      <Average>
        <div className='average'>{props.reviewsAverage}</div>
      </Average>
      <Stars>
        <span className='star-rating'>
          <div style={{position: 'absolute'}}>
            <Ratings
              svgIconPaths='M 12 17.27 L 18.18 21 l -1.64 -7.03 L 22 9.24 l -7.19 -0.61 L 12 2 L 9.19 8.63 L 2 9.24 l 5.46 4.73 L 5.82 21 Z'
              widgetDimensions='50px'
              widgetSpacings='0px'
              rating={Number(props.reviewsAverage)}
            >
              <Ratings.Widget widgetRatedColor='black' widgetEmptyColor='white'/>
              <Ratings.Widget widgetRatedColor='black' widgetEmptyColor='white'/>
              <Ratings.Widget widgetRatedColor='black' widgetEmptyColor='white'/>
              <Ratings.Widget widgetRatedColor='black' widgetEmptyColor='white'/>
              <Ratings.Widget widgetRatedColor='black' widgetEmptyColor='white'/>
            </Ratings>
          </div>
          <Ratings
            svgIconPaths='M 22 9.24 l -7.19 -0.62 L 12 2 L 9.19 8.63 L 2 9.24 l 5.46 4.73 L 5.82 21 L 12 17.27 L 18.18 21 l -1.63 -7.03 L 22 9.24 Z M 12 15.4 l -3.76 2.27 l 1 -4.28 l -3.32 -2.88 l 4.38 -0.38 L 12 6.1 l 1.71 4.04 l 4.38 0.38 l -3.32 2.88 l 1 4.28 L 12 15.4 Z'
            widgetDimensions='50px'
            widgetSpacings='0px'
            rating={5}
          >
            <Ratings.Widget widgetRatedColor='black' widgetEmptyColor='white'/>
            <Ratings.Widget widgetRatedColor='black' widgetEmptyColor='white'/>
            <Ratings.Widget widgetRatedColor='black' widgetEmptyColor='white'/>
            <Ratings.Widget widgetRatedColor='black' widgetEmptyColor='white'/>
            <Ratings.Widget widgetRatedColor='black' widgetEmptyColor='white'/>
          </Ratings><span className='total'>{(props.totalReviews > 0) ? props.totalReviews : ''}</span>
        </span>
      </Stars>
    </div>
  );
}

export default StarAverage;

/*

STAR PATH: "M 12 17.27 L 18.18 21 l -1.64 -7.03 L 22 9.24 l -7.19 -0.61 L 12 2 L 9.19 8.63 L 2 9.24 l 5.46 4.73 L 5.82 21 Z"
svgIconPaths="M 12 17.27 L 18.18 21 l -1.64 -7.03 L 22 9.24 l -7.19 -0.61 L 12 2 L 9.19 8.63 L 2 9.24 l 5.46 4.73 L 5.82 21 Z"

*/