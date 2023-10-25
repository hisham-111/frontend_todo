import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";
import "./index.css";
function Doing() {
  return (
    <div className="parent-container-box-todo">
      <div className="head-todo  head-todo-doing">
        <FontAwesomeIcon
          icon={faListCheck}
          className="burger-todo-icon doing-icon"
        />

        <span className="title-head-todo  head-doing">Doing</span>
      </div>

      <div className="box-todo">
        <h3 className="title-box-todo">hello world</h3>
        <p className="text-box">hello world : </p>
        <p className="text-box">hello world : </p>
        <p className="text-box">hello world : </p>
        <p className="text-box">hello world : </p>
      </div>
    </div>
  );
}

export default Doing;
