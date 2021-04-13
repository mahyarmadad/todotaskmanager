export const addtodoReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.task];
    default:
      return state;
  }
};
