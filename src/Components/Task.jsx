import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { updateTodo } from "../Redux/action";

const Task = () => {
  const { id } = useParams();
  const todo = useSelector((state) => state.todo);
  const item = todo.find((item) => item.id === id);
  const dispatch = useDispatch();

  if (!item) {
    return <Redirect to="/error" />;
  }

  const handleToggle = () => {
    dispatch(updateTodo(id));
  };

  console.log(item);
  return (
    <div>
      <h2>{item.title}</h2>
      <button onClick={handleToggle}>{item.status ? "True" : "False"} </button>
      <br />
      <Link to="/">Home</Link>
    </div>
  );
};

export { Task };
