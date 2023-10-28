// draggableCard.js
import React from "react";
import { useDrag } from "react-dnd";

function DraggableCard({ item, index, data, setData, itemType }) {
  const [, ref] = useDrag({
    type: itemType,
    item: { id: item.id, index },
  });

  return (
    <div ref={ref} className="box-todo">
      <h3 className="title-box-todo">{item.title}</h3>
      <div className="list-boxes">
        <p className="text-box">
          <span className="tile-list">Category</span> : {item.category}
        </p>
        <p className="text-box">
          <span className="tile-list">Due Date</span> : {item.dueDate}
        </p>
        <p className="text-box">
          <span className="tile-list">Estimate</span> : {item.estimate}
        </p>
        <p className="text-box">
          <span className="tile-list">Importance</span> : {item.importance}
        </p>
      </div>
    </div>
  );
}

export default DraggableCard;
