import React from "react";
import Todo from "../../components/todoComponent/todo";
import Doing from "../../components/DoingComponent/doing";
import Done from "../../components/DoneComponent/done";
import Header from "../../components/headerComponent/header";
import { RxQuestionMarkCircled } from "react-icons/rx";
import { MdPlaylistRemove } from "react-icons/md";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import BoardColumn from "../../components/BoardColumnComponent/board-column";

import "./index.css";
function TodoPage() {
  const [items, setItems] = React.useState([
    { id: 1, title: "Task 1", component: "Todo" },
    { id: 2, title: "Task 2", component: "Doing" },
  ]);

  const [isShow, setIsShow] = React.useState(false);

  const toggleShow = () => {
    // setIsShow(!isShow);

    if (!isShow) {
      setTimeout(() => {
        setIsShow(true);
      }, 300);
    } else {
      setIsShow(false);
    }
  };

  const moveItem = (fromIndex, toIndex, fromComponent, toComponent) => {
    const updatedItems = [...items];
    const [movedItem] = updatedItems.splice(fromIndex, 1);
    movedItem.component = toComponent;
    if (fromComponent !== toComponent) {
      updatedItems.splice(toIndex, 1);
    } else {
      updatedItems.splice(toIndex, 0, movedItem);
    }
    setItems(updatedItems);
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
          <Todo
            items={items.filter((item) => item.component === "Todo")}
            moveItem={moveItem}
          />
          <Doing
            items={items.filter((item) => item.component === "Doing")}
            moveItem={moveItem}
          />
          <Done
            items={items.filter((item) => item.component === "Done")}
            moveItem={moveItem}
          />
        </div>
      </DndProvider>
    </>
  );
}

export default TodoPage;
