import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Data from "./todoData";
import "./index.css";
import { useDrag, useDrop } from "react-dnd";
import { Outlet } from "react-router-dom";

function DraggableTodoItem({ todoList, index, moveTodo }) {
  const [, ref] = useDrag({
    type: "TODO",
    item: { type: "TODO", index },
  });

  const [, drop] = useDrop({
    accept: "TODO",
    hover: (draggedItem) => {
      if (draggedItem.type !== "TODO") {
        return;
      }

      if (draggedItem.index !== index) {
        moveTodo(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  return (
    <div ref={(node) => ref(drop(node))} className={"box-todo"}>
      <h3 className="title-box-todo">{todoList.title}</h3>

      <div className="list-boxes">
        <p className="text-box">
          <span className="tile-list">Category</span> : {todoList.category}
        </p>
        <p className="text-box">
          <span className="tile-list">Due Date</span> : {todoList.dueDate}
        </p>
        <p className="text-box">
          <span className="tile-list">Estimate</span> : {todoList.estimate}
        </p>
        <p className="text-box">
          <span className="tile-list">Importance</span> : {todoList.importance}
        </p>
      </div>
    </div>
  );
}

function Todo({ todo, setTodo }) {
  const moveTodo = (fromIndex, toIndex) => {
    const updatedItems = [...todo];
    const [movedItem] = updatedItems.splice(fromIndex, 1);
    updatedItems.splice(toIndex, 0, movedItem);
    setTodo(updatedItems);
  };

  return (
    <div className="parent-container-box-todo">
      <div className="head-todo">
        <GiHamburgerMenu className="burger-todo-icon" />
        <span className="title-head-todo">To Do</span>
      </div>
      {todo.map((todoList, index) => (
        <DraggableTodoItem
          key={todoList.id}
          todoList={todoList}
          index={index}
          moveTodo={moveTodo}
        />
      ))}

      <Outlet />
    </div>
  );
}

export default Todo;
