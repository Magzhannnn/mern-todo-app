import SelectTodo from "./components/Todos/SelectTodo";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import Todos from "./pages/Todos";
import {
  HOME_ROUTE,
  LOGIN_ROUTE,
  ONE_TODO_ROUTE,
  SIGN_ROUTE,
  TODO_ROUTE,
} from "./utils/const";

export interface IRouter {
  path: string;
  Component: () => React.ReactElement;
}

export const publicRoute: IRouter[] = [
  {
    path: LOGIN_ROUTE,
    Component: Auth,
  },
  {
    path: SIGN_ROUTE,
    Component: Auth,
  },
  {
    path: HOME_ROUTE,
    Component: Home,
  },
];

export const privateRoute: IRouter[] = [
  {
    path: HOME_ROUTE,
    Component: Home,
  },
  {
    path: TODO_ROUTE,
    Component: Todos,
  },
  {
    path: ONE_TODO_ROUTE,
    Component: SelectTodo,
  },
];
