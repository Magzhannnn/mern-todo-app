export interface ITodo {
  _id: string;
  text: string;
  complete: boolean;
  date: string;
}

export enum TodoActionTypes {
  LOAD_TODO = "LOAD_TODO",
  ERROR_TODO = "ERROR_TODO",
  FETCH_TODO = "FETCH_TODO",
  ADD_TODO = "ADD_TODO",
  REMOVE_TODO = "REMOVE_TODO",
  UPDATE_TODO = "UPDATE_TODO",
}

interface loadTodo {
  type: TodoActionTypes.LOAD_TODO;
}

interface errorTodo {
  type: TodoActionTypes.ERROR_TODO;
  payload: string;
}

interface fetchTodo {
  type: TodoActionTypes.FETCH_TODO;
  payload: ITodo[];
}

interface addTodo {
  type: TodoActionTypes.ADD_TODO;
  payload: ITodo;
}

interface removeTodo {
  type: TodoActionTypes.REMOVE_TODO;
  payload: string;
}

interface updateTodo {
  type: TodoActionTypes.UPDATE_TODO;
  payload: string;
}

export type TodoActions =
  | loadTodo
  | errorTodo
  | fetchTodo
  | addTodo
  | removeTodo
  | updateTodo;
