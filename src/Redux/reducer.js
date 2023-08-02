import * as todoActions from "./actionTypes";
const init = {
  todo: [],
  completed: []
};
const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case todoActions.ADD_TODO: {
      return {
        ...state,
        todo: [...state.todo, payload]
      };
    }
    case todoActions.DELETE_TODO: {
      const { id } = payload;
      const updated_todo = state.todo.filter((item) => item.id !== id);
      return {
        ...state,
        todo: updated_todo
      };
    }

    case todoActions.UPDATE_TODO: {
      const newTodo = state.todo.map((item) =>
        item.id === payload.id ? { ...item, status: !item.status } : item
      );

      return {
        ...state,
        todo: newTodo
      };
    }
    case todoActions.COMPLETE_TODO: {
      const complete = state.todo.filter((item) => item.status === false);
      return {
        ...state,
        completed: complete
      };
    }
    default:
      return state;
  }
};
export { reducer };
