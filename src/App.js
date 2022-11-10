import React { useState } from "react";

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
  
  return <div></div>;
}

export default App;
