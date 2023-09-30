import "./Flashcard.css";
import { useState } from "react";

const Flashcard = ({ props }) => {
  const [isFlipped, setFlipped] = useState(false);
  const handleFlipped = () => {
    setFlipped(!isFlipped);
  };
  return (
    <div
      className={`flashcard-item ${isFlipped ? "flipped" : ""}` + props.color}
      onClick={handleFlipped}
    >
      <div className="flashcard-front">
        <img src={props.img} alt={props.alt} />
      </div>
      <div className="flashcard-back">
        <h2>{props.name}</h2>
      </div>
    </div>
  );
};

export default Flashcard;
