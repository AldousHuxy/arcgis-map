import Locate from "@arcgis/core/widgets/Locate"

export const locate = (view: __esri.MapView) => new Locate({ view })