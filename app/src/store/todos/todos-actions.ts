import { ITodo, TodoActionTypes } from "../../types/todo";

export const loadTodo = {
  type: TodoActionTypes.LOAD_TODO,
};

export const errorTodo = (err: string) => ({
  type: TodoActionTypes.ERROR_TODO,
  payload: err,
});

export const fetchTodo = (todos: ITodo[]) => ({
  type: TodoActionTypes.FETCH_TODO,
  payload: todos,
});

export const addTodo = (todo: ITodo) => ({
  type: TodoActionTypes.ADD_TODO,
  payload: todo,
});

export const removeTodo = (id: string) => ({
  type: TodoActionTypes.REMOVE_TODO,
  payload: id,
});

export const updateTodo = (todo: ITodo) => ({
  type: TodoActionTypes.UPDATE_TODO,
  payload: todo,
});
