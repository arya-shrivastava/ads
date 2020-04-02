const studentApiDataReducer = (state = [], action) => {
  switch (action.type) {
    case "STUDENT_API_DATA":
      return action.payload.data;
    case "STUDENT_EDIT":
      const updateStudentData = state.map(each => {
        if (each.studentId === action.payload) {
          each.name = action.payload.name;
          each.address = action.payload.address;
          each.phoneNo = action.payload.phoneNo;
          each.country = action.payload.country;
        }
        return each;
      });
      return updateStudentData;
    case "STUDENT_DELETE":
      debugger;
      const deleteStudent = state.filter(
        each => each.studentId !== action.payload
      );
      debugger;
      return deleteStudent;
    case "STUDENT_ADD":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default studentApiDataReducer;
