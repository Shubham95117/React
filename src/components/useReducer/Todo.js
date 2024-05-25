import React, { useReducer } from "react";
import TodoList from "./TodoList";
const initialState = [];
// dont use action as string use like below
export const TODOS_ACTIONS = {
  ADD_TASK: "add",
  DELETE_TASK: "delete",
  RESET_TASKS: "reset",
};
const reducer = (state, action) => {
  switch (action.type) {
    case TODOS_ACTIONS.ADD_TASK:
      return [
        ...state,
        {
          id: state.length + 1,
          name: action.payload,
        },
      ];
    case TODOS_ACTIONS.DELETE_TASK:
      return state.filter((item) => item.id !== action.payload);
    case TODOS_ACTIONS.RESET_TASKS:
      return init(action.payload);
    default:
      return state;
  }
};
const init = (initialState) => {
  return initialState;
};
const Todo = () => {
  const [todos, dispatch] = useReducer(reducer, initialState, init);
  return (
    <div
      style={{
        margin: "15%",
      }}
    >
      <h2>TODO-UseREDUCER</h2>
      <input
        type="text"
        onBlur={(e) =>
          dispatch({
            type: TODOS_ACTIONS.ADD_TASK,
            payload: e.target.value,
          })
        }
      />
      <button
        onClick={() =>
          dispatch({
            type: TODOS_ACTIONS.RESET_TASKS,
            payload: initialState,
          })
        }
      >
        RESET
      </button>
      <hr />
      <TodoList todos={todos} dispatch={dispatch} />
    </div>
  );
};

export default Todo;
