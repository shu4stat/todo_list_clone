// import React, { useState } from "react";
import "./styles.css";

function TodoCard({ item, OnComplete, OnDelete, OnUncomplete, isComplete }) {
  // const handleComplete = (event) => {
  //   // const element = document.getElementById("complete");
  //   // element.style.textDecoration = "line-through";
  //   // SetStatus("completed");
  //   // console.log(`status inside TodoCard is ${status}`);
  //   const status = "completed";
  //   OnComplete(item._id, status);
  // };
  const handleCheck = (event) => {
    const status = event.target.checked;
    if (status) {
      OnComplete(item._id, status);
    } else {
      OnUncomplete(item._id, status);
    }
  };
  const handleDelete = (event) => {
    OnDelete(item._id);
  };

  return (
    <div>
      <input type="checkbox" checked={isComplete} onChange={handleCheck} />
      {isComplete ? (
        <div className="todo_container">{item.content}</div>
      ) : (
        <div>{item.content}</div>
      )}

      <div>
        {/* <button onClick={handleComplete}>Complete</button> */}
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}

export default TodoCard;
