import api, { AxiosResponse } from './index'

export const getCatagories = async (): Promise<AxiosResponse> => {
    try {
        return await api.get("/categories")
    } catch (error) {
        return error.response
    }
}

export const getProductList = async (): Promise<AxiosResponse> => {
    try {
        return await api.get("/products")
    } catch (error) {
        return error.response
    }
}