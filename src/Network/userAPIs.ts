import {AxiosResponse} from './index'

export interface UserLogin {
    emailId: string,
    password: string
}

const admin: UserLogin = {
    emailId: 'admin@admin.com',
    password: 'Admin@123'
}

export const userLogin = (body: UserLogin): AxiosResponse => {
    try {
        if (body.emailId === admin.emailId && body.password === admin.password) {
            return {
                data: body,
                status: 200
            }
        }
        return {
            data: {err: 'User not found'},
            status: 404,
        }
    } catch (error) {
        return {
            data: {err: 'User not found'},
            status: 404,
        }
    }
}