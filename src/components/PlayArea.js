import '../styles/PlayArea.css';
import Card from './Card';
const PlayArea = () => {
  return (
    <div className="playarea">
      <Card character="pingu" />
      <Card character="pingi" />
    </div>
  );
};

export default PlayArea;
