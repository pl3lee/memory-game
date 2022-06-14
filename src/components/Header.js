import '../styles/Header.css';
import { useSelector, useDispatch } from 'react-redux';
const Header = () => {
  const score = useSelector((state) => state.score.scores.score);
  const highScore = useSelector((state) => state.score.scores.highScore);
  return (
    <div className="header">
      <div
        className="instructions"
        onClick={() => {
          document.querySelector('.modal').classList.remove('closed');
        }}
      >
        <span className="material-symbols-outlined">help</span> How to play
      </div>
      <div className="title">Memory Game</div>
      <div className="score-container">
        <div className="high-score">High Score: {highScore}</div>
        <div className="score">Score: {score}</div>
      </div>
    </div>
  );
};

export default Header;
