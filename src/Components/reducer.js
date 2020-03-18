const apiDataReducer = (state = [], action) => {
  switch (action.type) {
    case "API_DATA":
      return action.payload.data;
    default:
      return state;
  }
};

export default apiDataReducer;
