import { z } from "zod"

const locationFormData = z.object({
    label: z.string(),
    longitude: z.number(),
    latitude: z.number()
})

export type Location = {
    _id: string
    label: string
    longitude: number
    latitude: number
}

export type LocationFormData = z.infer<typeof locationFormData>