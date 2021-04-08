import React, { useState } from "react";
import Header from "./Header";
import Board from "./Board";

const Game = () => {
  const [score, setScore] = useState(50);
  const [highScore, setHighScore] = useState(0);
  const [pickedCards, setPickedCards] = useState([]);

  const handlePick = (name) => {
    console.log(name);
  };

  return (
    <div>
      <Header score={score} highScore={highScore} />
      <Board score={score} highScore={highScore} handlePick={handlePick} />
    </div>
  );
};

export default Game;
