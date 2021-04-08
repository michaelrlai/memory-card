import React, { useState } from "react";
import Header from "./Header";
import Board from "./Board";

const Game = () => {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [pickedCards, setPickedCards] = useState([]);

  const handlePick = (pick) => {
    if (!pickedCards.includes(pick)) {
      setPickedCards((prevPickedCards) => [...prevPickedCards, pick]);
      setScore((prevScore) => prevScore + 1);
      if (score === highScore) {
        setHighScore((prevHighScore) => prevHighScore + 1);
      }
    } else {
      setPickedCards([]);
      setScore(0);
    }
  };

  return (
    <div>
      <Header score={score} highScore={highScore} />
      <Board score={score} highScore={highScore} handlePick={handlePick} />
    </div>
  );
};

export default Game;
