export const getViewCoordinates = (e: __esri.ViewClickEvent) => {
    const { longitude, latitude } = e.mapPoint
    return { longitude, latitude }
}