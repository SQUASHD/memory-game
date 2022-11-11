import React, { useState } from "react";
import Gameboard from "./components/gameboard";
import Scoreboard from "./components/scoreboard";

import "./styles/style.css";

const Game = () => {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [memory, setMemory] = useState([]);

  const checkBestScore = () => {
    if (score > bestScore) {
      setBestScore(score);
    }
  };

  const updateScore = (id) => {
    if (memory.includes(id)) {
      setScore(0);
      checkBestScore();
      setMemory([]);
    } else {
      setMemory([...memory, id]);
      setScore(score + 1);
    }
  };

  return (
    <div className="Game">
      <Scoreboard score={score} bestScore={bestScore} />
      <Gameboard updateScore={updateScore} />
      <div className="image-credit">
        <a href="https://www.freepik.com/free-vector/vegetables-icons-flat_1531146.htm#query=vegetable&position=14&from_view=search&track=sph">
          Images by macrovector
        </a>{" "}
        on Freepik
      </div>
    </div>
  );
};

export default Game;
