import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";
import Data from "./doingData";
import "./index.css";
import { useDrag, useDrop } from "react-dnd";

function DraggableDoingItem({ doingList, index, moveDoing }) {
  const [, ref] = useDrag({
    type: "DOING",
    item: { type: "DOING", index },
  });

  const [, drop] = useDrop({
    accept: "DOING",
    hover: (draggedItem) => {
      if (draggedItem.type !== "DOING") {
        return;
      }

      if (draggedItem.index !== index) {
        moveDoing(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  return (
    <div ref={(node) => ref(drop(node))} className="box-todo">
      <h3 className="title-box-todo">{doingList.title}</h3>

      <div className="list-boxes">
        <p className="text-box">
          <span className="tile-list">Category</span> : {doingList.category}
        </p>
        <p className="text-box">
          <span className="tile-list">Due Date</span> : {doingList.dueDate}
        </p>
        <p className="text-box">
          <span className="tile-list">Estimate</span> : {doingList.estimate}
        </p>
        <p className="text-box">
          <span className="tile-list">Importance</span> : {doingList.importance}
        </p>
      </div>
    </div>
  );
}

function Doing({ doing, setDoing }) {
  const moveDoing = (fromIndex, toIndex) => {
    const updatedItems = [...doing];
    const [movedItem] = updatedItems.splice(fromIndex, 1);
    updatedItems.splice(toIndex, 0, movedItem);
    setDoing(updatedItems);
  };

  return (
    <div className="parent-container-box-todo">
      <div className="head-todo">
        <FontAwesomeIcon
          icon={faListCheck}
          className="burger-todo-icon doing-icon"
        />
        <span className="title-head-todo">Doing</span>
      </div>
      {doing.map((doingList, index) => (
        <DraggableDoingItem
          key={index}
          doingList={doingList}
          index={index}
          moveDoing={moveDoing}
        />
      ))}
    </div>
  );
}

export default Doing;
