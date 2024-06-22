import MapView from '@arcgis/core/views/MapView';
import Map from '@arcgis/core/Map';

type CreateMapViewProps = {
  container: HTMLDivElement
  mapProperties?: __esri.MapProperties
}

export const createMapView = ({ container, mapProperties }: CreateMapViewProps) => {
  const center: [number, number] = [-105.14041811230041, 39.71438600514241]
  const zoom: number = 16
  const basemap: string = 'osm'
  const map = new Map ({ basemap, ...mapProperties })

  return new MapView({ map, container, center, zoom })
}