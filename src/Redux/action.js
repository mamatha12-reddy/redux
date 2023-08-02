import * as todoActions from "./actionTypes";

const addTodo = (payload) => {
  return {
    type: todoActions.ADD_TODO,
    payload
  };
};

const deleteTodo = (id) => {
  return {
    type: todoActions.DELETE_TODO,
    payload: {
      id
    }
  };
};

const updateTodo = (id) => {
  return {
    type: todoActions.UPDATE_TODO,
    payload: {
      id
    }
  };
};
const completeTodo = () => {
  return {
    type: todoActions.COMPLETE_TODO
  };
};

export { addTodo, deleteTodo, updateTodo, completeTodo };
