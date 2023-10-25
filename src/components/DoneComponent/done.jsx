import React from "react";
import { TiInputCheckedOutline } from "react-icons/ti";
import "./index.css";
function Done() {
  const [done, setDone] = React.useState();
  return (
    <div className="parent-container-box-todo">
      <div className="head-todo  head-todo-done">
        <TiInputCheckedOutline className="burger-todo-icon  done-icon" />

        <span className="title-head-todo  done-title">Done</span>
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

export default Done;
