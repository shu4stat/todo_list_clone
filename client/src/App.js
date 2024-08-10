import TodoCreate from "./components/TodoCreate";
import TodoCard from "./components/TodoCard";
import React, { useEffect, useState } from "react";
import Axios from "axios";

function App() {
  const [todo_list, SetTodoList] = useState([]);
  const [change_status, SetChangeStatus] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/getTodos").then((response) => {
      SetTodoList(response.data);
      console.log("useEffect run");
      SetChangeStatus("");
    });
  }, [change_status]);

  const CreateTodo = (content, status) => {
    // console.log(status);
    Axios.post("http://localhost:3001/createTodo", {
      content,
      status,
    }).then((response) => {
      // console.log(response);
      alert("Todo Created");
      // SetTodoList([...todo_list, { content, status }]);
      SetChangeStatus("created");
    });
  };

  const DeleteTodo = (id) => {
    Axios.delete("http://localhost:3001/DeleteTodo", { id }).then(
      (response) => {
        alert("Todo Deleted");
        SetChangeStatus("deleted");
        todo_list.filter((id) => todo_list._id !== id);
        // console.log(todo_list);
      }
    );
  };
  const CompleteTodo = (id, status) => {
    const updateTodolist = todo_list.map((item) => {
      if (item._id === id) {
        return { ...item, status: true };
      }
      return item;
    });
    SetTodoList(updateTodolist);
    // console.log(status);
    Axios.post("http://localhost:3001/CompleteTodo", {
      id,
      status,
    }).then((response) => {
      // alert("Todo Completed");
    });
  };
  const UncompleteTodo = (id, status) => {
    const updateTodolist = todo_list.map((item) => {
      if (item._id === id) {
        return { ...item, status: false };
      }
      return item;
    });
    SetTodoList(updateTodolist);
    // console.log(status);
    Axios.post("http://localhost:3001/CompleteTodo", {
      id,
      status,
    }).then((response) => {
      // alert("Todo Completed");
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
            OnDelete={DeleteTodo}
            OnUncomplete={UncompleteTodo}
            isComplete={todo_item.status}
          />
        );
      })}
    </div>
  );
}

export default App;
