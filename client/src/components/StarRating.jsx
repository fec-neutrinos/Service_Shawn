import styled from 'styled-components';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const Rating = styled.div`

  .rating {
    unicode-bidi: bidi-override;
    position: absolute;
    margin-left: 40px;
    display: flex;
    align-items: center;
  }
  .message {
    font-family: gordita;
    font-size: 14px;
    direction: ltr;
    padding-left: 15px;
  }
`;

var StarRating = (props) => {


  return (
    <>
    <Rating>
      <div className='rating'>
        <span onClick={props.handleRating} value={1}>
          {props.hovered > 0 || props.rating > 0 ?
            <StarIcon className='star1' value={1} onMouseEnter={props.handleHover} onMouseLeave={props.handleLeave}/>
            :
            <StarBorderIcon className='star1' value={1} onMouseEnter={props.handleHover} onMouseLeave={props.handleLeave}/>
          }
        </span>
        <span onClick={props.handleRating} value={2}>
          {props.hovered > 1 || props.rating > 1 ?
            <StarIcon className='star2' value={2} onMouseEnter={props.handleHover} onMouseLeave={props.handleLeave}/>
            :
            <StarBorderIcon className='star2' value={2} onMouseEnter={props.handleHover} onMouseLeave={props.handleLeave}/>
          }
        </span>
        <span onClick={props.handleRating} value={3}>
          {props.hovered > 2 || props.rating > 2 ?
            <StarIcon className='star3' value={3} onMouseEnter={props.handleHover} onMouseLeave={props.handleLeave}/>
            :
            <StarBorderIcon className='star3'value={3} onMouseEnter={props.handleHover} onMouseLeave={props.handleLeave}/>
          }
        </span>
        <span onClick={props.handleRating} value={4}>
          {props.hovered > 3 || props.rating > 3 ?
            <StarIcon className='star4' value={4} onMouseEnter={props.handleHover} onMouseLeave={props.handleLeave}/>
            :
            <StarBorderIcon className='star4' value={4} onMouseEnter={props.handleHover} onMouseLeave={props.handleLeave}/>
          }
        </span>
        <span onClick={props.handleRating} value={5}>
          {props.hovered > 4 || props.rating > 4 ?
            <StarIcon className='star5' value={5} onMouseEnter={props.handleHover} onMouseLeave={props.handleLeave}/>
            :
            <StarBorderIcon className='star5'value={5} onMouseEnter={props.handleHover} onMouseLeave={props.handleLeave}/>
          }
        </span>
        <span className="message">{props.rating > 3 ? 'Great, so glad you liked it!' : ''}{props.rating < 3 && props.rating !== '' ? 'We\'re sorry you had a bad experience!' : ''}</span>
      </div>
    </Rating>
    </>
  );
};

export default StarRating;
