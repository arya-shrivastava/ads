const studentApiDataReducer = (state = [], action) => {
  switch (action.type) {
    case "EMPLOYEE_ADD":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default studentApiDataReducer;
