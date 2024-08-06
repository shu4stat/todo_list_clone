import TodoCreate from "./components/TodoCreate";
import TodoCard from "./components/TodoCard";
import { useState } from "react";

function App() {
  const [todo_content, SetContent] = useState();
  const CreateTodo = (content) => {};
  return (
    <div>
      <TodoCreate onCreate={CreateTodo} />
      <TodoCard />
    </div>
  );
}

export default App;
