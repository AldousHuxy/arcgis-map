import { useQuery } from "@tanstack/react-query"
import { gisServer } from "./axios"
import { AxiosResponse } from "axios"
import { Legend } from "../types/legend"

export const useGetStreamLegendQuery = () => {
    return useQuery({
        queryKey: ['legend'],
        queryFn: async () => (await gisServer.get<never, AxiosResponse<Legend, Error>, unknown>('/Hydrology/Streams/MapServer/legend?f=pjson')).data,
        initialData: {} as Legend
    })
}