import { createStore } from "redux";
import { rootReducer } from "./rootRedcuer";

export const configureStore = () => {
  return createStore(rootReducer)
};
