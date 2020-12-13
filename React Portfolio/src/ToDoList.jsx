import React from "react";

const ToDoList = (props) => {
  return (
    <>
      <div className="showData">
        <li className="item"> {props.text} </li>
        <button
          className="delete"
          onClick={() => {
            props.onSelect(props.id);
          }}
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default ToDoList;
