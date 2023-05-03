import { RootState } from "../rootRedcuer";

export const selectAllTodosInfo = (state: RootState) => state.todoStore;

export const selectLoadTodo = (state: RootState) => state.todoStore.loading;

export const selectErrorTodo = (state: RootState) => state.todoStore.error;

export const selectAllTodos = (state: RootState) => state.todoStore.todos;
