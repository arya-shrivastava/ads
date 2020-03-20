const formReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_USER":
      return [...state, action.payload];
    case "EDIT_USER":
      const updatedUsers = state.map(each => {
        if (each.id === action.payload.id) {
          each.name = action.payload.name;
          each.city = action.payload.city;
        }
        return each;
      });
      return updatedUsers;
    case "DELETE_USER":
      const deletedUser = state.filter(each => each.id !== action.payload.id);
      return deletedUser;
    default:
      return state;
  }
};

export default formReducer;
