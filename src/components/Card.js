import '../styles/Card.css';
import pinguImg from '../images/pingu.png';
import pingaImg from '../images/pinga.png';
import pinggImg from '../images/pingg.png';
import pingiImg from '../images/pingi.png';
import pingoImg from '../images/pingo.png';
import robbyImg from '../images/robby.png';
import walrusImg from '../images/walrus.png';

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

const Card = () => {
  return (
    <div className="card">
      <img src={characters.pingu.source} alt={characters.pingu.name}></img>
      <div>{characters.pingu.name}</div>
    </div>
  );
};

export default Card;
