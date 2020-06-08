import { ADD_USER_DETAILS, USER_LOGIN } from "./Types"


export interface UserAction {
    type: string,
    payload: object
}

export const addUserDetailsInStore = (data: object) : UserAction => {
    return {
        type: ADD_USER_DETAILS,
        payload: data
    }
}