import artichoke from "../images/artichoke.png";
import aubergine from "../images/aubergine.png";
import bellpepper from "../images/bellpepper.png";
import broccoli from "../images/broccoli.png";
import carrot from "../images/carrot.png";
import cauliflower from "../images/cauliflower.png";
import celery from "../images/celery.png";
import chili from "../images/chili.png";
import corn from "../images/corn.png";
import cucumber from "../images/cucumber.png";
import onion from "../images/onion.png";
import peas from "../images/peas.png";
import potato from "../images/potato.png";
import pumpkin from "../images/pumpkin.png";
import radish from "../images/radish.png";
import tomato from "../images/tomato.png";

import React from "react";

const Image = ({ id, src, alt, handleImageClick }) => {
  return (
    <img
      src={src}
      alt={alt}
      onClick={() => {
        handleImageClick(id);
      }}
    />
  );
};

export default Image;
