import React, { useState } from "react";
import "./Flashcard.css";

const Flashcard = ({ flashcard }) => {
  const [isFlipped, setFlipped] = useState(false);

  const handleFlipped = () => {
    setFlipped(!isFlipped);
  };

  return (
    <div
      className={`flashcard-item ${isFlipped ? "flipped" : ""} ${
        flashcard.color
      }`}
      onClick={handleFlipped}
    >
      <div className="front">
        <div className="flashcard-image-container">
          <img
            className="flashcard-image"
            src={flashcard.img}
            alt={flashcard.alt}
          />
        </div>
      </div>

      <div className="back">
        <h2>{flashcard.name}</h2>
      </div>
    </div>
  );
};

export default Flashcard;
