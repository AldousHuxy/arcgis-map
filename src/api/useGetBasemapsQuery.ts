import { useQuery } from "@tanstack/react-query"
import { axiosClient } from "./axios"
import { AxiosResponse } from "axios"
import { Basemap } from "../types/basemap"

export const useGetBasemapsQuery = () => {
    return useQuery({
        queryKey: ['basemaps'],
        queryFn: async () => (await axiosClient.get<never, AxiosResponse<Basemap[], Error>, unknown>('/basemaps')).data,
        initialData: [] as Basemap[]
    })
}