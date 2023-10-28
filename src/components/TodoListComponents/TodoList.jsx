import React, { useState } from "react";
import TodoCard from "./TodoCard";

function TodoList() {
  const [todoCards, setTodoCards] = useState([]);
  const [newCardTitle, setNewCardTitle] = useState("");

  const handleAddCard = () => {
    if (newCardTitle.trim() !== "") {
      setTodoCards([...todoCards, { title: newCardTitle }]);
      setNewCardTitle("");
    }
  };

  return (
    <div className="list">
      <div className="list-title">
        <h3>To Do</h3>
      </div>
      <div className="list-cards">
        {todoCards.map((card, index) => (
          <TodoCard key={index} card={card} />
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

export default TodoList;
