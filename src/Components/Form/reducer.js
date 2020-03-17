const formReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_USER":
      return [...state, action.payload];
    case "EDIT_USER":
      const id = action.payload.id;
      const name = action.payload.name;
      const city = action.payload.city;
      const updatedUsers = state.map(each => {
        if (each.id === id) {
          each.name = name;
          each.city = city;
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
