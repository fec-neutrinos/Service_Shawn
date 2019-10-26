/* eslint-disable func-style */
import styled from 'styled-components';
import CheckIcon from '@material-ui/icons/Check';

var Percentage = styled.div`
  .percentage {
    text-align: center;
    position: relative;
    font-family: gordita;
    font-weight: 700;
    font-size: 12px;
    line-height: 20px;
    padding: 25px;
  }
  .recommend {
    text-align: center;
    position: relative;
    font-family: gordita;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
  }
  .check {
    font-size: 12px;
    height: 25px;
    width: 25px;
    text-align: center;
    vertical-align: middle;
    border-radius: 50%;
    background: #fdcf41;
    margin-right: 10px
  }

`;


function WouldRecommendAverage(props) {
  return (
    <>
    <Percentage>
      <div className="percentage">
        <CheckIcon className="check"></CheckIcon><span>{props.averageRecommend}</span><span className="recommend">% would recommend to a friend</span>
      </div>
    </Percentage>
    </>
  );
}

export default WouldRecommendAverage;