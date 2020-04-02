import { combineReducers } from "redux";
import formReducer from "../src/Components/Form/reducer";
import apiDataReducer from "../src/Components/API/reducer";
import studentApiDataReducer from "../src/Components/StudentAPI/reducer";

export default combineReducers({
  users: formReducer,
  apiData: apiDataReducer,
  studentApiData: studentApiDataReducer
});
