import { useState } from 'react';
import Box from '@mui/material/Box';
import { BASEMAP } from './constants';
import { ArcGraphic } from './components/ArcGIS/ArcGraphic';
import { ArcGraphicsLayer } from './components/ArcGIS/ArcGraphicsLayer';
import { ArcMapView } from './components/ArcGIS/ArcMapView';
import Point from '@arcgis/core/geometry/Point';
import { createPoint } from './components/ArcGIS/utilities/geometry/createPoint';
import SimpleMarkerSymbol from '@arcgis/core/symbols/SimpleMarkerSymbol';
import { createSimpleMarkerSymbol } from './components/ArcGIS/utilities/symbols/createSimpleMarkerSymbol';
// import Polyline from '@arcgis/core/geometry/Polyline';
// import { createPolyline } from './components/ArcGIS/utilities/geometry/createPolyline';
// import SimpleLineSymbol from '@arcgis/core/symbols/SimpleLineSymbol';
// import { createSimpleLineSymbol } from './components/ArcGIS/utilities/symbols/createSimpleLineSymbol';
import Polygon from '@arcgis/core/geometry/Polygon';
import { createPolygon } from './components/ArcGIS/utilities/geometry/createPolygon';
import SimpleFillSymbol from '@arcgis/core/symbols/SimpleFillSymbol';
import { createSimpleFillSymbol } from './components/ArcGIS/utilities/symbols/createSimpleFillSymbol';
import { DropdownSelector } from './components/DropdownSelector';
import districtLines from './data/districtLines.json';
import { useGetLocationsQuery } from './api/useGetLocationsQuery';
import { basemaps } from './components/ArcGIS/data/basemaps';
import { Location } from './types/location';

const App = () => {
  const [basemap, setBasemap] = useState<string>('osm')
  const { data: locations } = useGetLocationsQuery()

  const point: Point = createPoint({ longitude: -105.14041945340482, latitude: 39.714388068402506 })
  const simpleMarkerSymbol: SimpleMarkerSymbol = createSimpleMarkerSymbol({ color: [125, 255, 13, 0.25] })

  // const polyline: Polyline = createPolyline({ paths: [thedistrict] })
  // const simpleLineSymbol: SimpleLineSymbol = createSimpleLineSymbol({ color: 'blue', width: 3, })

  const polygon: Polygon = createPolygon({ rings: [districtLines] })
  const simpleFillSymbol: SimpleFillSymbol = createSimpleFillSymbol({ color: [0, 0, 0, 0.125] })

  return (
    <Box sx={{ position: 'relative' }}>
      <DropdownSelector
        defaultMap={BASEMAP}
        options={basemaps}
        onChange={setBasemap}
      />
      <ArcMapView mapProperties={{ basemap }} onClick={e => displayCoordinates(e)}>
        <ArcGraphicsLayer>
          <ArcGraphic geometry={point} symbol={simpleMarkerSymbol} />
          {/* <ArcGraphic geometry={polyline} symbol={simpleLineSymbol} /> */}
          <ArcGraphic geometry={polygon} symbol={simpleFillSymbol} />
        </ArcGraphicsLayer>
      </ArcMapView>
    </Box>
  )
}

const displayCoordinates = (e: any) => {
  const { longitude, latitude } = e.mapPoint
  console.log({ longitude, latitude })
  const { x, y } = e
  console.log({ x, y })
  console.log('====================================')
}

export default App;