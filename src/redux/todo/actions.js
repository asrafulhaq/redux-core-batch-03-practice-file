import { TODO_ADD, TODO_DELETE, TODO_UPDATE } from "./actionTypes";

export const createTodo = (todo) => {
  return { type: TODO_ADD, payload: todo };
};

export const deleteTodo = (todo) => {
  return { type: TODO_DELETE, payload: todo };
};

export const updateTodo = (todo) => {
  return { type: TODO_UPDATE, payload: todo };
};
