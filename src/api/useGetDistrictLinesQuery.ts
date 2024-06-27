import { useQuery } from "@tanstack/react-query"
import { axiosClient } from "./axios"
import { AxiosResponse } from "axios"
import { DistrictLine } from "../types/districtLines"

export const useGetDistrictLinesQuery = () => {
    return useQuery({
        queryKey: ['district-lines'],
        queryFn: async () => (await axiosClient.get<never, AxiosResponse<DistrictLine[], Error>, unknown>('/district-lines')).data,
        initialData: [] as DistrictLine[]
    })
}