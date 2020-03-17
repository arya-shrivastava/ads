import { combineReducers } from "redux";
import formReducer from "../src/Components/Form/reducer";

export default combineReducers({ users: formReducer });
