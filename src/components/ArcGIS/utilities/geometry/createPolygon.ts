import Polygon from '@arcgis/core/geometry/Polygon';

export const createPolygon = (PolygonProperties: __esri.PolygonProperties) => new Polygon(PolygonProperties)