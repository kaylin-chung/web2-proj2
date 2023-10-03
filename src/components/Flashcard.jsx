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
        <div className="flashcard-image">
          <img src={flashcard.img} alt={flashcard.alt} />
        </div>
      </div>
      <div className="back">
        <div className="flashcard-content">
          <h2>{flashcard.name}</h2>
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
