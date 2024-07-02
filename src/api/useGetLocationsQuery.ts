import { useQuery } from "@tanstack/react-query"
import { axiosClient } from "./axios"
import { AxiosResponse } from "axios"
import { Location } from '../types/location'

export const useGetLocationsQuery = () => {

    return useQuery({
        queryKey: ['locations'],
        queryFn: async () => (await axiosClient.get<never, AxiosResponse<Location[], Error>, unknown>('/locations')).data,
        initialData: [] as Location[]
    })
}