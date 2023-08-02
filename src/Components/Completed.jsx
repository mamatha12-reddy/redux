import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { completeTodo } from "../Redux/action";

const Completed = () => {
  const comp = useSelector((state) => state.completed);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(completeTodo());
  }, []);
  return (
    <div>
      {comp?.map((item) => (
        <div key={item.id}>
          <h4>{`${item.title} : ${item.status}`}</h4>
          <Link to={`/task/${item.id}`}>More Details?</Link>
        </div>
      ))}
    </div>
  );
};

export { Completed };
