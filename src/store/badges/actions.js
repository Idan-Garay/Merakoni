const ADD_POINTS = "ADD POINTS";
const DELETE_POINTS = "DELETE POINTS";

export const addPoints = (pts, dispatch) => {
  dispatch({
    type: ADD_POINTS,
    payload: pts,
  });
};

export const deletePoints = (pts, dispatch) => {
  dispatch({
    type: DELETE_POINTS,
    payload: pts,
  });
};
