import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import AddTodoForm from "./AddTodoForm";
import EditForm from "./EditForm";
import "./main.css";

export default function Main() {
  const [list, setList] = useState(() => {
    const Todo = localStorage.getItem("todo");
    if (Todo) {
      return JSON.parse(Todo);
    } else {
      return [];
    }
  });
  const [list1, setList1] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [update, setUpdate] = useState({});

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(list));
  }, [list]);

  function handleAdd(e) {
    setList1(e.target.value);
  }

  function handleEdit(e) {
    setUpdate({ ...update, text: e.target.value });
    console.log(update);
  }

  function handleAddFormSubmit(e) {
    e.preventDefault();

    if (list1 !== "") {
      setList([
        ...list,
        {
          id: new Date(),
          text: list1.trim(),
        },
      ]);
    }

    setList1("");
  }

  function handleEditFormSubmit(e) {
    e.preventDefault();

    handleUpdateTodo(update.id, update);
  }

  function handleDelete(id) {
    const removeItem = list.filter((todo) => {
      return todo.id !== id;
    });
    setList(removeItem);
  }

  function handleUpdateTodo(id, updatedTodo) {
    const updatedItem = list.map((todo) => {
      return todo.id === id ? updatedTodo : todo;
    });
    setIsEditing(false);
    setList(updatedItem);
  }

  function handleEditClick(todo) {
    setIsEditing(true);
    setUpdate({ ...todo });
  }

  return (
    <div className="div1">
      <div
        style={{
          width: "300px",
          height: "fit-content",
          border: "2px solid #dfb7b7",
        }}
      >
        {isEditing ? (
          <EditForm
            currentTodo={update}
            setIsEditing={setIsEditing}
            onEditInputChange={handleEdit}
            onEditFormSubmit={handleEditFormSubmit}
          />
        ) : (
          <AddTodoForm
            todo={list1}
            onAddInputChange={handleAdd}
            onAddFormSubmit={handleAddFormSubmit}
          />
        )}
        <span>Click Enter to add</span>
      </div>

      <ul
        style={{
          border: "2px solid red",
          width: "261px",
          height: "max-content",
        }}
      >
        {list.map((todo) => (
          <TodoItem
            todo={todo}
            onEditClick={handleEditClick}
            onDeleteClick={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
}
