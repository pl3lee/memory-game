import '../styles/PlayArea.css';
import Card from './Card';
import uniqid from 'uniqid';
import { useSelector, useDispatch } from 'react-redux';

const PlayArea = () => {
  const characters = useSelector((state) => state.clickState.characters);
  let cards = characters.map((char) => (
    <Card character={char} key={uniqid()} />
  ));
  return <div className="playarea">{cards}</div>;
};

export default PlayArea;
