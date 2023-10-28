// TodoPage.js
import React, { useState } from "react";
import Header from "../../components/headerComponent/header";
import { RxQuestionMarkCircled } from "react-icons/rx";
import { MdPlaylistRemove } from "react-icons/md";
import Todo from "../../components/todoComponent/todo";
import Doing from "../../components/DoingComponent/doing";
import Done from "../../components/DoneComponent/done";

import Data from "../../components/todoComponent/todoData";
import DoneData from "../../components/DoneComponent/doneData";
import DoingData from "../../components/DoingComponent/doingData";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "./index.css";

function TodoPage() {
  const [isShow, setIsShow] = useState(false);

  // Declare state variables and set functions
  const [todo, setTodo] = useState(Data);
  const [done, setDone] = useState(DoneData);
  const [doing, setDoing] = useState(DoingData);

  const toggleShow = () => {
    setIsShow(!isShow);
  };

  return (
    <>
      <Header />
      {isShow ? (
        <MdPlaylistRemove className="remove-icon" onClick={toggleShow} />
      ) : (
        <RxQuestionMarkCircled
          className="questionMark visible"
          onClick={toggleShow}
        />
      )}
      {isShow && (
        <div className="container-quotation-box">
          <q className="quotation-box">
            Anything that can go wrong, will go wrong!
          </q>
        </div>
      )}
      <DndProvider backend={HTML5Backend}>
        <div className="parent-container-todo">
          <Todo todo={todo} setTodo={setTodo} />
          <Doing doing={doing} setDoing={setDoing} />
          <Done done={done} setDone={setDone} />
        </div>
      </DndProvider>
    </>
  );
}

export default TodoPage;
