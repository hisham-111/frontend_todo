import React, { useState } from "react";
import DoneCard from "./DoneCard";

function DoneList() {
  const [doneCards, setDoneCards] = useState([]);
  const [newCardTitle, setNewCardTitle] = useState("");

  const handleAddCard = () => {
    if (newCardTitle.trim() !== "") {
      setDoneCards([...doneCards, { title: newCardTitle }]);
      setNewCardTitle("");
    }
  };

  return (
    <div className="list">
      <div className="list-title">
        <h3>Done</h3>
      </div>
      <div className="list-cards">
        {setDoneCards.map((card, index) => (
          <DoneCard key={index} card={card} />
        ))}
      </div>
      <div className="list-add-card">
        <input
          type="text"
          placeholder="Add a card..."
          value={newCardTitle}
          onChange={(e) => setNewCardTitle(e.target.value)}
        />
        <button onClick={handleAddCard}>Add Card</button>
      </div>
    </div>
  );
}

export default DoneList;
