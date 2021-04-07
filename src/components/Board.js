import React, { useState, useEffect } from "react";
import bulbasaur from "../images/bulbasaur.png";
import caterpie from "../images/caterpie.png";
import clefairy from "../images/clefairy.png";
import ekans from "../images/ekans.png";
import jigglypuff from "../images/jigglypuff.png";
import nidoran from "../images/nidoran.png";
import nidorana from "../images/nidorana.png";
import pidgey from "../images/pidgey.png";
import pikachu from "../images/pikachu.png";
import rattata from "../images/rattata.png";
import sandshrew from "../images/sandshrew.png";
import spearow from "../images/spearow.png";
import squirtle from "../images/squirtle.png";
import vulpix from "../images/vulpix.png";
import weedle from "../images/weedle.png";

const Board = () => {
  const images = [
    {
      src: bulbasaur,
      title: "Bulbusaur",
    },
    {
      src: caterpie,
      title: "Caterpie",
    },
    {
      src: clefairy,
      title: "Clefairy",
    },
    {
      src: ekans,
      title: "Ekans",
    },
    {
      src: jigglypuff,
      title: "Jigglypuff",
    },
    {
      src: nidoran,
      title: "Nidoran",
    },
    {
      src: nidorana,
      title: "Nidorana",
    },
    {
      src: pidgey,
      title: "Pidgey",
    },
    {
      src: pikachu,
      title: "Pikachu",
    },
    {
      src: rattata,
      title: "Rattata",
    },
    {
      src: sandshrew,
      title: "Sandshrew",
    },
    {
      src: spearow,
      title: "Spearow",
    },
    {
      src: squirtle,
      title: "Squirtle",
    },
    {
      src: vulpix,
      title: "Vulpix",
    },
    {
      src: weedle,
      title: "Weedle",
    },
  ];

  const [cards, setCards] = useState(images);

  const handleClick = () => {
    console.log(cards);
  };

  const shuffle = () => {
    const newCards = [...cards];
    let i = newCards.length;
    while (i) {
      let randomIndex = Math.floor(Math.random() * i);
      i--;
      [newCards[randomIndex], newCards[i]] = [
        newCards[i],
        newCards[randomIndex],
      ];
    }
    setCards(newCards);
  };

  return (
    <div className="board">
      <button onClick={shuffle}>Shuffle</button>
      <div className="card-container">
        {cards.map((card) => (
          <button key={card.title} className="card" onClick={handleClick}>
            <img src={card.src} alt="" />
            <p className="caption">{card.title}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Board;
