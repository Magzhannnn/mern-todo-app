import { combineReducers } from "redux";
import { todoReducer } from "./todos/todo-reducer";

export const rootReducer = combineReducers({
  todoStore: todoReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
