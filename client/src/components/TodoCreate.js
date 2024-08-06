import { useState } from "react";

function TodoCreate(onCreate) {
  const [todo_content, SetContent] = useState(null);
  const handleChange = (event) => {
    SetContent(event.target.value);
  };
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  // };
  return (
    <div>
      <form>
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
