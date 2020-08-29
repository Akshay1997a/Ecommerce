import api, { AxiosResponse } from './index'

export interface UserLogin {
    emailId: string,
    password: string
}

const admin: UserLogin = {
    emailId: 'admin@admin.com',
    password: 'Admin@123'
}

export const userLogin = async (body: UserLogin): Promise<AxiosResponse> => {
    try {
        return await api.post("/users", body)
    } catch (error) {
        return {
            data: { msg: 'User not found' },
            status: 404,
        }
    }
}