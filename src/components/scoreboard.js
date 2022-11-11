import React from "react";

const Scoreboard = (props) => {
  const { score, bestScore } = props;
  return (
    <div className="score-container">
      <h2>Score: {score}</h2>
      <div className="title">
        <h1>Click images to get points</h1>
        <h2>Click the same image twice and you lose</h2>
      </div>
      <h2>Best Score: {bestScore}</h2>
    </div>
  );
}

export default Scoreboard;