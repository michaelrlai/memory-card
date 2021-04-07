import React, { useState } from "react";
import Header from "./Header";
import Board from "./Board";

const Game = () => {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  return (
    <div>
      <Header />
      <Board />
    </div>
  );
};

export default Game;
