import List from "List";
import * as Types from "contants/Types";

const initialState = {
  movies: List,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case Types.ADD_MOVIE:
      return {
        ...state,
        movies: [...state.movies, action.payload],
      };
    default:
      return state;
  }
}
