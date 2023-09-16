import React, { useEffect, useState } from "react";
import Card from "../Card/Card";

const Cards = ({ courseName, handleCredit }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("data.json").then((res) =>
      res.json().then((data) => {
        setCards(data);
      })
    );
  }, []);

  return (
    <div className="grid grid-cols-3 gap-10">
      {cards.map((card, i) => {
        return (
          <Card
            key={i}
            card={card}
            courseName={courseName}
            handleCredit={handleCredit}
          />
        );
      })}
    </div>
  );
};

export default Cards;
