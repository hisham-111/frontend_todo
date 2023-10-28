import React from "react";
import { useDrop } from "react-dnd";
import Card from "../../components/CardComponent/card";

function BoardColumn({ title, cards, moveCard, columnId }) {
  const [, drop] = useDrop({
    accept: "CARD",
    hover: (draggedItem) => {
      if (draggedItem.columnId !== columnId) {
        moveCard(draggedItem.cardId, columnId);
        draggedItem.columnId = columnId;
      }
    },
  });

  return (
    <div className="column">
      <h2>{title}</h2>
      <div ref={drop} className="cards">
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}

export default BoardColumn;
