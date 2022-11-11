import React from "react";

const Image = ({ id, name, src, alt, handleImageClick }) => {
  return (
    <div className="image-container">
      <img
        src={src}
        alt={alt}
        onClick={() => {
          handleImageClick(id);
        }}
      />
      <div className="image-name">{name}</div>
    </div>
  );
};

export default Image;
