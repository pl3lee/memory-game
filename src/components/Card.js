import '../styles/Card.css';
import pinguImg from '../images/pingu.png';
import pingaImg from '../images/pinga.png';
import pinggImg from '../images/pingg.png';
import pingiImg from '../images/pingi.png';
import pingoImg from '../images/pingo.png';
import robbyImg from '../images/robby.png';
import walrusImg from '../images/walrus.png';
import { useSelector, useDispatch } from 'react-redux';
import { addClicked, shuffleCharacters } from '../redux/clickStateReducer';
const characters = {
  pingu: {
    name: 'Pingu',
    source: pinguImg,
  },
  pinga: {
    name: 'Pinga',
    source: pingaImg,
  },
  pingg: {
    name: 'Pingg',
    source: pinggImg,
  },
  pingi: {
    name: 'Pingi',
    source: pingiImg,
  },
  pingo: {
    name: 'Pingo',
    source: pingoImg,
  },
  robby: {
    name: 'Robby',
    source: robbyImg,
  },
  walrus: {
    name: 'Walrus',
    source: walrusImg,
  },
};

const Card = (props) => {
  const dispatch = useDispatch();
  const click = () => {
    dispatch(shuffleCharacters());
    dispatch(addClicked(props.character));
  };
  let card = (
    <div className="card" onClick={click}>
      <img
        src={characters[props.character].source}
        alt={characters[props.character].name}
      ></img>
      <div>{characters[props.character].name}</div>
    </div>
  );
  return card;
};

export default Card;
