import TodoCreate from "./components/TodoCreate";
import TodoCard from "./components/TodoCard";
import React, { useEffect, useState } from "react";
import Axios from "axios";

function App() {
  const [todo_list, SetTodoList] = useState([]);
  // const [status, SetStatus] = useState("");
  const [create_status, SetCreateStatus] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/getTodos").then((response) => {
      SetTodoList(response.data);
      console.log("useEffect run");
    });
  }, [create_status]);

  const CreateTodo = (content, status) => {
    // SetStatus("in progress");
    // console.log(status);
    Axios.post("http://localhost:3001/createTodo", {
      content,
      status,
    }).then((response) => {
      // console.log(response);
      alert("Todo Created");
      // SetTodoList([...todo_list, { content, status }]);
      SetCreateStatus("created");
    });
  };
  const CompleteTodo = (id, newstatus) => {
    const updateTodolist = todo_list.map((item) => {
      if (item._id === id) {
        return { ...item, status: newstatus };
      }
      return item;
    });
    SetTodoList(updateTodolist);
    console.log(updateTodolist);
    Axios.post("http://localhost:3001/CompleteTodo", {
      id,
      newstatus,
    }).then((response) => {
      alert("Status Changed");
    });
  };
  return (
    <div>
      <TodoCreate onCreate={CreateTodo} />
      {todo_list.map((todo_item) => {
        return (
          <TodoCard
            key={todo_item._id}
            item={todo_item}
            OnComplete={CompleteTodo}
          />
        );
      })}
    </div>
  );
}

export default App;
