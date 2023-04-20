import React from "react";
import "./TodoList.css";

const TodoList = (props) => {
  let style = {
    color: "red",
    listStyleType: "none",
  };
  console.log(props);
  return (
    <div>
      <h2>Todo List Component</h2>
      <ul style={style}>
        {props.todos.map((item) => (
          <li key={item.id} className={item.status ? "completed" : ""}>
            <input
              type="checkbox"
              onChange={() => {
                props.ChangeStatus(item.id);
              }}
            />
            {item.task}
            <button onClick={() => props.nadlerEdit(item)}>EDIT</button>
            <button onClick={() => props.handleDelete(item.id)}>DEL</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
