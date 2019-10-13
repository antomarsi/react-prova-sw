export const requestActivity = filter => ({
  type: "REQUEST_ACTIVITY_FETCH",
  payload: { filter }
});

export const removeActivity = key => ({
  type: "REMOVE_ACTIVITY",
  payload: { key }
});


export const setMainAction = (name, genre) => ({
  type: "SET_MAIN",
  payload: { name, genre }
});

export const setOrderAction = order => ({
  type: "SET_ORDER",
  payload: { order }
});

export const resetProfile = () => ({
  type: "RESET_PROFILE"
});
