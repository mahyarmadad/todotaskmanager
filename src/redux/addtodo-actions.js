export const addToDO = (task) => ({
  type: "ADD_TODO",
  payload: task,
});

export const makeItComplete = (id) => ({
  type: "COMPLETE_TODO",
  payload: id,
});
