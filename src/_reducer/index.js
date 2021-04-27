import { combineReducers } from "redux";
import moviesReducer from "_reducer/moviesReducer";

export default combineReducers({
  movies: moviesReducer,
});
