import { GetCity } from "../types/location"
import { api } from "./axios"

export const locationApi = {
    async getAll(params?: any) {
        const { data } = await api.get<GetCity[]>('/locations', {
            params: params
        })
        
        return data
    }
}