import '../styles/Main.css';
import PlayArea from './PlayArea';
import { useSelector, useDispatch } from 'react-redux';
import { resetLost, setScore } from '../redux/scoreReducer';
import { resetClicked } from '../redux/clickStateReducer';
import React, { useState } from 'react';
const Main = () => {
  const lost = useSelector((state) => state.score.lost);
  const dispatch = useDispatch();
  const restartGame = () => {
    dispatch(resetLost());
    dispatch(resetClicked());
    dispatch(setScore(0));
  };

  if (lost) {
    return (
      <div className="main">
        <div className="restart" onClick={restartGame}>
          You lost! Click to restart
        </div>
      </div>
    );
  } else {
    return (
      <div className="main">
        <PlayArea />
      </div>
    );
  }
};

export default Main;
