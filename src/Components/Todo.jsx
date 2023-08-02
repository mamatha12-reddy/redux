import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import { v4 as uuid } from "uuid";
import { addTodo, deleteTodo } from "../Redux/action";

const Todo = () => {
  const [title, setTitle] = React.useState("");
  const todo = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const history = useHistory();
  const handleAdd = () => {
    const payload = {
      title,
      status: false,
      id: uuid()
    };
    const action = addTodo(payload);
    dispatch(action);
  };
  const handleIncompleted = () => {
    history.push("/comp");
  };
  return (
    <>
      <h1>Todo</h1>
      <input
        placeholder="write todo"
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
      <h4>All tasks</h4>
      <div>
        {todo?.map((item) => (
          <div key={item.id}>
            <h4>{`${item.title} : ${item.status}`}</h4>
            <Link to={`/task/${item.id}`}>More Details?</Link>
            <button onClick={() => dispatch(deleteTodo(item.id))}>
              Delete
            </button>
          </div>
        ))}
        <button onClick={handleIncompleted}>Show Incompleted</button>
      </div>
    </>
  );
};

export { Todo };
