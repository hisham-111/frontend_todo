import React from "react";
import { TiInputCheckedOutline } from "react-icons/ti";
import Data from "./doneData";
import "./index.css";
function Done({ searchResults }, ref) {
  const [done, setDone] = React.useState(Data);
  return (
    <div className="parent-container-box-todo">
      <div className="head-todo  head-todo-done">
        <TiInputCheckedOutline className="burger-todo-icon  done-icon" />

        <span className="title-head-todo  done-title">Done</span>
      </div>

      {done.map((doneList, index) => (
        <div className="box-todo" key={index}>
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
              <span className="tile-list">Importance</span> :{" "}
              {doneList.importance}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Done;
