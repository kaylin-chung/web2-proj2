import React from "react";
import "./App.css";
import { useState } from "react";
import "font-awesome/css/font-awesome.min.css";
import Flashcard from "./components/Flashcard";
import afghanhound from "./images/afghanhound.jpeg";
import bassethound from "./images/bassethound.jpeg";
import bedlingtonterrier from "./images/bedlingtonterrier.jpeg";
import bichonfrise from "./images/bichonfrise.jpeg";
import bordercollie from "./images/bordercollie.webp";
import bostonterrier from "./images/bostonterrier.jpeg";
import doberman from "./images/doberman.jpeg";
import goldenretriever from "./images/goldenretriever.jpeg";
import samoyed from "./images/samoyed.jpeg";
import shihtzu from "./images/shihtzu.jpeg";
import yorkshireterrier from "./images/yorkshireterrier.jpeg";

const App = () => {
  const [index, setIndex] = useState(0);

  const handleNextClick = () => {
    if (index < FlashcardList.length - 1) {
      setIndex(index + 1);
    }
  };

  const handlePrevClick = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const FlashcardList = [
    {
      color: "lightgreen",
      name: "Golden Retriver",
      img: goldenretriever,
      alt: "image failure",
    },
    {
      color: "lightgreen",
      name: "Border Collie",
      img: bordercollie,
      alt: "image failure",
    },
    {
      color: "lightgreen",
      name: "Boston Terrier",
      img: bostonterrier,
      alt: "image failure",
    },
    {
      color: "lightgreen",
      name: "Yorkshire Terrier",
      img: yorkshireterrier,
      alt: "image failure",
    },
    {
      color: "lightyellow",
      name: "Shihtzu",
      img: shihtzu,
      alt: "image failure",
    },
    {
      color: "lightyellow",
      name: "Doberman",
      img: doberman,
      alt: "image failure",
    },
    {
      color: "lightyellow",
      name: "Samoyed",
      img: samoyed,
      alt: "image failure",
    },
    {
      color: "lightyellow",
      name: "Basset Hound",
      img: bassethound,
      alt: "image failure",
    },
    {
      color: "lightred",
      name: "Bichon Frise",
      img: bichonfrise,
      alt: "image failure",
    },
    {
      color: "lightred",
      name: "Afghan Hound",
      img: afghanhound,
      alt: "image failure",
    },
    {
      color: "lightred",
      name: "Bedlington Terrier",
      img: bedlingtonterrier,
      alt: "image failure",
    },
  ];

  return (
    <div className="App">
      <h2>Puppy Puzzle</h2>
      <h4>Can You Guess the Breed?</h4>
      <h5>Number of Cards: 11</h5>
      <Flashcard flashcard={FlashcardList[index]} />
      <button className="arrow-button" onClick={handlePrevClick}>
        <i className="fa fa-arrow-left"></i>{" "}
      </button>
      <button className="arrow-button" onClick={handleNextClick}>
        <i className="fa fa-arrow-right"></i>{" "}
      </button>
    </div>
  );
};

export default App;
