import React from "react";
import { TODOS_ACTIONS } from "./Todo";
const TodoList = (props) => {
  return (
    <div>
      {" "}
      {props.todos.map((item) => {
        return (
          <li key={item.id}>
            {item.name}{" "}
            <span>
              <button
                onClick={() =>
                  props.dispatch({
                    type: TODOS_ACTIONS.DELETE_TASK,
                    payload: item.id,
                  })
                }
              >
                Delete
              </button>
            </span>
          </li>
        );
      })}
    </div>
  );
};

export default TodoList;
