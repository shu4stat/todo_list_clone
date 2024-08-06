import TodoCreate from "./components/TodoCreate";
import TodoCard from "./components/TodoCard";
import { useState } from "react";
import Axios from "axios";

function App() {
  const [todo, SetTodo] = useState([]);
  const status = "test";
  const id = "0";
  const CreateTodo = (content) => {
    Axios.post("http://localhost:3001/createTodo", {
      id,
      content,
      status,
    }).then((response) => {
      alert("Todo Created");
      SetTodo([...todo, { id, content, status }]);
    });
  };
  return (
    <div>
      <TodoCreate onCreate={CreateTodo} />
      <TodoCard />
    </div>
  );
}

export default App;
