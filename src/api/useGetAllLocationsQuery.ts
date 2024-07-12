import { useQuery } from "@tanstack/react-query"
import { apiServer } from "./axios"
import { AxiosResponse } from "axios"
import { Location } from '../types/location'

export const useGetAllLocationsQuery = () => {
    return useQuery({
        queryKey: ['locations'],
        queryFn: async () => (await apiServer.get<never, AxiosResponse<Location[], Error>, unknown>('/locations')).data,
        initialData: [] as Location[]
    })
}