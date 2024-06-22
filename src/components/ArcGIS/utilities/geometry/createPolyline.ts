import Polyline from '@arcgis/core/geometry/Polyline';

export const createPolyline = (PolylineProperties: __esri.PolylineProperties) => new Polyline(PolylineProperties)