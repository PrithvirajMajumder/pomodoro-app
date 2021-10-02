export const SET_ALARM = 'ALARM/SET_ALARM';
export const DELETE_ALARM = 'ALARM/DELETE_ALARM';

export const setAlarm = alarm => {
  return dispatch => {
    dispatch({
      type: SET_ALARM,
      payload: alarm,
    });
  };
};

export const deleteAlarm = alarm => {
  return dispatch => {
    dispatch({
      type: DELETE_ALARM,
      payload: alarm,
    });
  };
};
