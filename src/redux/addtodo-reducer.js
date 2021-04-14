export const addtodoReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];
    case "COMPLETE_TODO": {
      return state.map((task, i) => {
        if (i !== action.payload) {
          return task;
        }
        return {
          ...task,
          complete: true,
        };
      });
    }
    default:
      return state;
  }
};
