import React from "react";
import { useDrag } from "react-dnd";

function Card({ card }) {
  const [, drag] = useDrag({
    type: "CARD",
    item: { cardId: card.id, columnId: card.columnId },
  });

  return (
    <div ref={drag} className="card">
      {card.title}
    </div>
  );
}

export default Card;
