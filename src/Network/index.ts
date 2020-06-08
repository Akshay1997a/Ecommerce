import Axios from 'axios'

export interface AxiosResponse {
    data: object | Array<object> | undefined,
    status: number
}

const localUrl = "http://10.0.2.2:3000"

const api = Axios.create({
    baseURL: localUrl
})

export default api