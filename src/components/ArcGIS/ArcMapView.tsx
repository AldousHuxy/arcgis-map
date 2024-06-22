import { ReactNode, useEffect, useRef, useState } from 'react';
import { createMapView } from './utilities/createMapView';
import MapView from '@arcgis/core/views/MapView';
import { MapViewContext } from '../../context/MapViewContext';
import Basemap from '@arcgis/core/Basemap';

type ArcMapViewProp = {
  children?: ReactNode
  mapProperties?: __esri.MapProperties
  onClick?: (e: __esri.ViewClickEvent) => void
}

export const ArcMapView = ({ children, mapProperties, onClick }: ArcMapViewProp) => {
  const mapRef = useRef<any|null>(null)
  const [view, setView] = useState<MapView>()

  useEffect(() => {
    if (!mapRef?.current) return

    const _view: MapView = createMapView({ mapProperties, container: mapRef.current })
    setView(_view)

    return () => _view && _view.destroy()
  }, [])

  useEffect(() => {
    if (!view || !mapProperties) return

    view.map.basemap = Basemap.fromId(mapProperties.basemap as string)
  }, [view, mapProperties])

  useEffect(() => {
    if (!view || !onClick) return

    const handle = view.on('click', onClick)

    return () => handle.remove()
  }, [view, onClick])

  return (
    <div ref={mapRef} style={{ height: '100vh' }}>
      <MapViewContext.Provider value={{ view }}>
        {children}
      </MapViewContext.Provider>
    </div>
  )
}