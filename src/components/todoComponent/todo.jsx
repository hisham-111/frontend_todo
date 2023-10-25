import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Data from "./todoData";
import "./index.css";
function Todo() {
  const [todo, setTodo] = React.useState(Data);
  return (
    <>
      <div className="parent-container-box-todo">
        <div className="head-todo ">
          <GiHamburgerMenu className="burger-todo-icon" />

          <span className="title-head-todo">To Do</span>
        </div>
        {todo.map((todoList, index) => (
          <div className="box-todo" key={index}>
            <h3 className="title-box-todo">{todoList.title}</h3>

            <div className="list-boxes">
              <p className="text-box">
                <span className="tile-list">Category</span> :{" "}
                {todoList.category}
              </p>
              <p className="text-box">
                <span className="tile-list">Due Date</span> : {todoList.dueDate}
              </p>
              <p className="text-box">
                <span className="tile-list">Estimate</span> :{" "}
                {todoList.estimate}
              </p>
              <p className="text-box">
                <span className="tile-list">Importance</span> :
                {todoList.importance}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Todo;
