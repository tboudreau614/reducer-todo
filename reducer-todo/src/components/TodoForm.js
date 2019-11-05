import React, { useState, useReducer } from "react";
import { reducer, todo } from "../reducers/reducer";
import TodoList from "./TodoList";

const TodoForm = ({ dispatch }) => {
  const [item, setItem] = useState("");

  // console.log("state.todo", state, todo);

  const handleChanges = e => {
    setItem(e.target.value);
  };

  const submitForm = e => {
    e.preventDefault();
    dispatch({
      type: "ADD_TODO",
      payload: item
    });
    setItem("");
  };

  const clearCompleted = e => {
    e.preventDefault();
    dispatch({
      type: "CLEAR_COMPLETED"
    });
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <label htmlFor="todo" hidden>
          Whatcha gonna do?
        </label>
        <input name="todo" className="form1" onChange={handleChanges} value={item} />
        <button className="form2">Add Todo</button>
        <button className="form3" onClick={clearCompleted}>Clear Completed</button>
      </form>
    </div>
  );
};

export default TodoForm;