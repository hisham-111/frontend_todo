import React from "react";
import { TiInputCheckedOutline } from "react-icons/ti";
import Data from "./doneData";
import "./index.css";

import { useDrag, useDrop } from "react-dnd";

function DraggableDoneItem({ doneList, index, moveDone }) {
  const [, ref] = useDrag({
    type: "DONE",
    item: { index },
  });

  const [, drop] = useDrop({
    accept: "DONE",
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveDone(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  return (
    <div ref={(node) => ref(drop(node))} className="box-todo">
      <h3 className="title-box-todo">{doneList.title}</h3>

      <div className="list-boxes">
        <p className="text-box">
          <span className="tile-list">Category</span> : {doneList.category}
        </p>
        <p className="text-box">
          <span className="tile-list">Due Date</span> : {doneList.dueDate}
        </p>
        <p className="text-box">
          <span className="tile-list">Estimate</span> : {doneList.estimate}
        </p>
        <p className="text-box">
          <span className="tile-list">Importance</span> : {doneList.importance}
        </p>
      </div>
    </div>
  );
}

function Done() {
  const [done, setDone] = React.useState(Data);
  const moveDoing = (fromIndex, toIndex) => {
    const updatedDone = [...done];
    const [movedItem] = updatedDone.splice(fromIndex, 1);
    updatedDone.splice(toIndex, 0, movedItem);
    setDone(updatedDone);
  };

  return (
    <div className="parent-container-box-todo">
      <div className="head-todo">
        <TiInputCheckedOutline className="burger-todo-icon  done-icon" />

        <span className="title-head-todo">Done</span>
      </div>
      {done.map((doneList, index) => (
        <DraggableDoneItem
          key={index}
          doneList={doneList}
          index={index}
          moveDone={moveDoing}
        />
      ))}
    </div>
  );
}

export default Done;
