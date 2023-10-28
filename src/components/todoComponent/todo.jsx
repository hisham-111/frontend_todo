import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Data from "./todoData";
import "./index.css";
import { useDrag, useDrop } from "react-dnd";

function DraggableTodoItem({ todoList, index, moveTodo }) {
  const [, ref] = useDrag({
    type: "TODO",
    item: { index },
  });

  const [, drop] = useDrop({
    accept: "TODO",
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveTodo(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  return (
    <div ref={(node) => ref(drop(node))} className="box-todo">
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

function Todo() {
  const [todo, setTodo] = React.useState(Data);

  const moveTodo = (fromIndex, toIndex) => {
    const updatedTodo = [...todo];
    const [movedItem] = updatedTodo.splice(fromIndex, 1);
    updatedTodo.splice(toIndex, 0, movedItem);
    setTodo(updatedTodo);
  };

  return (
  
      <div className="parent-container-box-todo">
        <div className="head-todo">
          <GiHamburgerMenu className="burger-todo-icon" />
          <span className="title-head-todo">To Do</span>
        </div>
        {todo.map((todoList, index) => (
          <DraggableTodoItem
            key={index}
            todoList={todoList}
            index={index}
            moveTodo={moveTodo}
          />
        ))}
      </div>
  );
}

export default Todo;
