import React, { useState } from "react";
import Image from "./image";
import imageList from "./image-data";

const Gameboard = ({ handleImageClick }) => {
  const [gameboard, setGameboard] = useState([]);
  const [imageOrder, setImageOrder] = useState([]);

  const shuffle = (array) => {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  };

  return (
    <div className="gameboard">
      {imageList.map((image) => (
        <Image
          key={image.id}
          id={image.id}
          name={image.name}
          src={image.src}
          alt={image.alt}
          handleImageClick={handleImageClick}
        />
      ))}
    </div>
  );
};

export default Gameboard;
