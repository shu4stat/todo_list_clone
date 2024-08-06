import { useState } from "react";

function TodoCreate({ onCreate }) {
  const [todo_content, SetContent] = useState("");
  const handleChange = (event) => {
    SetContent(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(todo_content);
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
