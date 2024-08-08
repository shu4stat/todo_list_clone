import React, { useState } from "react";
function TodoCard({ item, OnComplete }) {
  const [status, SetStatus] = useState("");
  const handleComplete = (event) => {
    // const element = document.getElementById("button_complete");
    // element.style.textDecoration = "line-through";
    SetStatus("complete");
    OnComplete(item._id, status);
  };
  return (
    <div>
      {item.content}
      <div>
        <button id="button_complete" onClick={handleComplete}>
          Complete
        </button>
        <button>Delete</button>
      </div>
    </div>
  );
}

export default TodoCard;
