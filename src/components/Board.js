import React, { useState } from "react";
import Card from "./Card";
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

const Board = (props) => {
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
      <div className="cards-container">
        {cards.map((card) => (
          <Card
            key={card.title}
            card={card}
            handlePick={props.handlePick}
            shuffle={shuffle}
          />
        ))}
      </div>
    </div>
  );
};

export default Board;
