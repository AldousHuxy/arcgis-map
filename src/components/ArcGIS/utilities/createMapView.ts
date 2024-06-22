import MapView from '@arcgis/core/views/MapView';
import Map from '@arcgis/core/Map';
import { BASEMAP, CENTER, ZOOM } from '../../../constants';

type CreateMapViewProps = {
  container: HTMLDivElement
  mapProperties?: __esri.MapProperties
}

export const createMapView = ({ container, mapProperties }: CreateMapViewProps) => {
  const center: [number, number] = CENTER
  const zoom: number = ZOOM
  const basemap: string = BASEMAP
  const map = new Map ({ basemap, ...mapProperties })

  return new MapView({ map, container, center, zoom })
}