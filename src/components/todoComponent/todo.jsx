import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import "./index.css";
function Todo() {
  const [todo, setTodo] = React.useState();
  return (
    <>
      <div className="parent-container-box-todo">
        <div className="head-todo ">
          <GiHamburgerMenu className="burger-todo-icon" />

          <span className="title-head-todo">To Do</span>
        </div>

        <div className="box-todo">
          <h3 className="title-box-todo">hello world</h3>
          <p className="text-box">hello world : </p>
          <p className="text-box">hello world : </p>
          <p className="text-box">hello world : </p>
          <p className="text-box">hello world : </p>
        </div>

        <div className="box-todo">
          <h3 className="title-box-todo">hello world</h3>
          <p className="text-box">hello world : </p>
          <p className="text-box">hello world : </p>
          <p className="text-box">hello world : </p>
          <p className="text-box">hello world : </p>
        </div>

        <div className="box-todo">
          <h3 className="title-box-todo">hello world</h3>
          <p className="text-box">hello world : </p>
          <p className="text-box">hello world : </p>
          <p className="text-box">hello world : </p>
          <p className="text-box">hello world : </p>
        </div>
      
      </div>
    </>
  );
}

export default Todo;
