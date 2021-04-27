import * as Types from "contants/Types";

export const addMovie = (values) => {
  return async (dispatch) => {
    dispatch({
      type: Types.ADD_MOVIE,
      payload: values,
    });
  };
};
