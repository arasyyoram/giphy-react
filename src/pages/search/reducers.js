export const queryReducer = (state, action) => {
  switch (action.type) {
    case "search":
      return {
        query: action.payload
      };

    default:
      return state;
  }
};
