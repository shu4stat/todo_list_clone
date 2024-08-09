import React, { useState } from "react";
function TodoCard({ item, OnComplete, OnDelete }) {
  const handleComplete = (event) => {
    // const element = document.getElementById("button_complete");
    // element.style.textDecoration = "line-through";
    // SetStatus("completed");
    // console.log(`status inside TodoCard is ${status}`);
    const status = "completed";
    OnComplete(item._id, status);
  };
  const handleDelete = (event) => {
    OnDelete(item._id);
  };
  return (
    <div>
      {item.content}
      <div>
        <button onClick={handleComplete}>Complete</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}

export default TodoCard;
