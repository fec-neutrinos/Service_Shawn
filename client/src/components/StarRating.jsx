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
        {[...Array(5)].map((e, i) => (
          <span key={`star${i + 1}`} onClick={props.handleRating} value={i + 1}>
            {props.hovered > i || props.rating > i ?
              <StarIcon className={`star${i + 1}`} value={i + 1} onMouseEnter={props.handleHover} onMouseLeave={props.handleLeave}/>
              :
              <StarBorderIcon className={`star${i + 1}`}value={i + 1} onMouseEnter={props.handleHover} onMouseLeave={props.handleLeave}/>
            }
          </span>
        ))}
        <span className="message">{props.rating > 3 ? 'Great, so glad you liked it!' : ''}{props.rating < 3 && props.rating !== '' ? 'We\'re sorry you had a bad experience!' : ''}</span>
      </div>
    </Rating>
    </>
  );
};

export default StarRating;




// {[...Array(review.rating)].map((e, i) => <StarIcon key={i}/>).concat([...Array(5 - review.rating)].map((e, i) => <StarBorderIcon key={i + 5}/>))}