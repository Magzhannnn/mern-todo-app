import { toDatestring } from "../../helpers/toDateString";
import { ITodo, TodoActionTypes, TodoActions } from "../../types/todo";

interface InitialStateProps {
  todos: ITodo[];
  error: string;
  loading: boolean;
}

const initialState: InitialStateProps = {
  todos: [],
  error: "",
  loading: false,
};

export const todoReducer = (
  state = initialState,
  action: TodoActions
): InitialStateProps => {
  switch (action.type) {
    case TodoActionTypes.LOAD_TODO:
      return { ...state, loading: true };
    case TodoActionTypes.FETCH_TODO:
      return {
        ...state,
        loading: false,
        todos: action.payload.map((todo) => ({
          ...todo,
          createdAt: toDatestring(todo.createdAt),
        })),
      };
    case TodoActionTypes.ERROR_TODO:
      return { ...state, loading: false, error: action.payload };
    case TodoActionTypes.ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            ...action.payload,
            createdAt: toDatestring(action.payload.createdAt),
          },
        ],
        error: "",
      };
    case TodoActionTypes.REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo._id !== action.payload),
      };
    case TodoActionTypes.UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo._id === action.payload
            ? { ...todo, complete: !todo.complete }
            : todo
        ),
      };
    default:
      return state;
  }
};
