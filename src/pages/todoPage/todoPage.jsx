import React from "react";
import Todo from "../../components/todoComponent/todo";
import Doing from "../../components/DoingComponent/doing";
import Done from "../../components/DoneComponent/done";
import Header from "../../components/headerComponent/header";
import { RxQuestionMarkCircled } from "react-icons/rx";
import { MdPlaylistRemove } from "react-icons/md";
import "./index.css";
function TodoPage() {
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
      <div className="parent-container-todo">
        <Todo />
        <Doing />
        <Done />
      </div>
    </>
  );
}

export default TodoPage;
