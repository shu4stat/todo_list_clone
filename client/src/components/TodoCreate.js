import { useState } from "react";

function TodoCreate({ onCreate }) {
  const [todo_content, SetContent] = useState("");
  // const [todo_status, SetStatus] = useState("");
  // console.log(`initialization state ${todo_content}`);
  const handleChange = (event) => {
    SetContent(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // SetStatus("in progress");
    const status = "in progress";
    onCreate(todo_content, status);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter a thing to do"
          type="text"
          value={todo_content}
          onChange={handleChange}
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default TodoCreate;
