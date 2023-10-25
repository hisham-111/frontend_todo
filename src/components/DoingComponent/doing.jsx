import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";
import Data from "./doingData";
import "./index.css";
function Doing() {
  const [doing, setDoing] = React.useState(Data);
  return (
    <div className="parent-container-box-todo">
      <div className="head-todo  head-todo-doing">
        <FontAwesomeIcon
          icon={faListCheck}
          className="burger-todo-icon doing-icon"
        />

        <span className="title-head-todo  head-doing">Doing</span>
      </div>
      {doing.map((doingList, index) => (
        <div className="box-todo" key={index}>
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
              <span className="tile-list">Importance</span> :{" "}
              {doingList.importance}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Doing;
