import { combineReducers } from "redux";
import userReducer from "./User/UserReducer";


const rootReducer = combineReducers(userReducer)

export default rootReducer