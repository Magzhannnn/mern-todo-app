import { combineReducers } from "redux";
import { todoReducer } from "./todos/todo-reducer";
import { modalReducer } from "./modal/modal-reducer";

export const rootReducer = combineReducers({
  modal: modalReducer,
  todoStore: todoReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
