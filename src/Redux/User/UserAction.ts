import { ADD_USER_DETAILS, USER_LOGIN } from "./Types"


export interface UserAction {
    type: string,
    payload: object
}


export const userLogin = (data: object): UserAction => {
    return {
        type: USER_LOGIN,
        payload: data
    }
}

export const addUserDetails = (data: object) => {
    return {
        type: ADD_USER_DETAILS,
        paylaod: data
    }
}