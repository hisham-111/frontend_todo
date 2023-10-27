import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { GiHamburgerMenu } from "react-icons/gi";
import TodoData from "./todoData";
import "./index.css";

function Todo() {
  const [characters, updateCharacters] = useState(TodoData);

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateCharacters(items);
  }

  return (
    <div className="parent-container-box-todo">
      <div className="head-todo">
        <GiHamburgerMenu className="burger-todo-icon" />
        <span className="title-head-todo">To Do</span>
      </div>

      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="characters">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {characters.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided) => (
                    <div
                      className="box-todo"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}>
                      <h3 className="title-box-todo">{item.title}</h3>
                      <div className="list-boxes">
                        <p className="text-box">
                          <span className="tile-list">Category</span>:
                          {item.category}
                        </p>
                        <p className="text-box">
                          <span className="tile-list">Due Date</span>:
                          {item.dueDate}
                        </p>
                        <p className="text-box">
                          <span className="tile-list">Estimate</span>:
                          {item.estimate}
                        </p>
                        <p className="text-box">
                          <span className="tile-list">Importance</span>:
                          {item.importance}
                        </p>
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default Todo;
