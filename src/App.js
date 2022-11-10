import React, { useState } from "react";
import Gameboard from "./components/gameboard";

const App = () => {
  const [score, setScore] = useState(0);
  const [bestscore, setBestScore] = useState(0);
  const [memory, setMemory] = useState([]);

  const handleScore = () => {
    setScore(score + 1);
    if (score > bestscore) {
      setBestScore(score);
    }
  };

  const handleImageClick = (id) => {
    if (memory.includes(id)) {
      setScore(0);
      setMemory([]);
    } else {
      setMemory([...memory, id]);
      handleScore();
    }
  };

  return (
    <div>
      <div className="score-container">
        <h1>Score: {score}</h1>
        <h1>Best Score: {bestscore}</h1>
      </div>
      <Gameboard
        handleImageClick={handleImageClick}
      />
      <a href="https://www.freepik.com/free-vector/vegetables-icons-flat_1531146.htm#query=vegetable&position=14&from_view=search&track=sph">
        Image by macrovector
      </a>{" "}
      on Freepik
    </div>
  );
};

export default App;
