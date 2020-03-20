const apiDataReducer = (state = [], action) => {
  switch (action.type) {
    case "API_DATA":
      return action.payload.data;
    case "EMPLOYEE_EDIT":
      const updatedEmployeeData = state.map(each => {
        if (each.id === action.payload.employee_id) {
          each.employee_name = action.payload.employee_name;
          each.employee_salary = action.payload.employee_salary;
          each.employee_age = action.payload.employee_age;
        }
        return each;
      });
      return updatedEmployeeData;
    case "EMPLOYEE_DELETE":
      const deletedEmployee = state.filter(
        each => each.id !== action.payload.employee_id
      );
      return deletedEmployee;
    case "EMPLOYEE_ADD":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default apiDataReducer;
