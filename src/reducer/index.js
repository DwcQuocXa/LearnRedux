import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import { combineReducers } from "redux";

export default combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
});
