import React from "react";
import Todo from "../../components/todoComponent/todo";
import Doing from "../../components/DoingComponent/doing";
import Done from "../../components/DoneComponent/done";
import Header from "../../components/headerComponent/header";
import "./index.css";
function TodoPage() {
  return (
    <>
      <Header />
      <div className="parent-container-todo">
        <Todo />
        <Doing />
        <Done />
      </div>
    </>
  );
}

export default TodoPage;
