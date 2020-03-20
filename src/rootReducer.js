import { combineReducers } from "redux";
import formReducer from "../src/Components/Form/reducer";
import apiDataReducer from "../src/Components/API/reducer";

export default combineReducers({ users: formReducer, apiData: apiDataReducer });
