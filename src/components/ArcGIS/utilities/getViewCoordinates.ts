import { Location } from "../../../types/location"

export const getViewCoordinates = (e: __esri.ViewClickEvent): Partial<Location> => {
    const { longitude, latitude } = e.mapPoint
    return { latitude, longitude }
}