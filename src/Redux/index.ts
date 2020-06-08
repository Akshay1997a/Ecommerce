import { combineReducers } from "redux";
import userReducer from "./User/UserReducer";


const rootReducer = combineReducers({
    userData: userReducer
})

export default rootReducer