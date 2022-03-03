import { combineReducers } from "redux";
import { loginReducer } from "./loginReducer";
import counter from "./index";

const reducers = combineReducers({ counter ,loginReducer});

export default reducers;
