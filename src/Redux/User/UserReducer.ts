import { UserAction } from "./UserAction"
import {USER_LOGIN, ADD_USER_DETAILS} from './Types'

export interface UserInterface {
    emailId: string,
    firstName?: string,
    lastName?: string,
    avatar?: string
}

const initialState: UserInterface = {
    emailId: '',
    firstName: "",
    lastName: "",
    avatar: ""
}

const userReducer = (state = initialState, action: UserAction) => {
    switch (action.type) {
        case USER_LOGIN:
            return {
                ...state,
                ...action.payload
            }
        
        case ADD_USER_DETAILS:
            return {
                ...state,
                ...action.payload
            }

        default :
            return state
    }
}

export default userReducer