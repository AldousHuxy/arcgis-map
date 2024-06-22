import { ArcGraphic } from './components/ArcGIS/ArcGraphic';
import { ArcGraphicsLayer } from './components/ArcGIS/ArcGraphicsLayer';
import { ArcMapView } from './components/ArcGIS/ArcMapView';
import Point from '@arcgis/core/geometry/Point';
import SimpleMarkerSymbol from '@arcgis/core/symbols/SimpleMarkerSymbol';
import { createPoint } from './components/ArcGIS/utilities/geometry/createPoint';
import { createSimpleMarkerSymbol } from './components/ArcGIS/utilities/symbols/createSimpleMarkerSymbol';
import { createPolyline } from './components/ArcGIS/utilities/geometry/createPolyline';
import Polyline from '@arcgis/core/geometry/Polyline';
import { createSimpleLineSymbol } from './components/ArcGIS/utilities/symbols/createSimpleLineSymbol';
import SimpleLineSymbol from '@arcgis/core/symbols/SimpleLineSymbol';
import { createPolygon } from './components/ArcGIS/utilities/geometry/createPolygon';
import { createSimpleFillSymbol } from './components/ArcGIS/utilities/symbols/createSimpleFillSymbol';
import SimpleFillSymbol from '@arcgis/core/symbols/SimpleFillSymbol';
import { useState } from 'react';
import { DropdownSelector } from './components/DropdownSelector';
import basemaps from './data/basemaps.json';
import thedistrict from './data/thedistrict.json';
import Box from '@mui/material/Box';
import { BASEMAP } from './constants';

const App = () => {
  const [basemap, setBasemap] = useState<string>('osm')

  // const point: Point = createPoint({
  //   longitude: -105.14041945340482,
  //   latitude: 39.714388068402506
  // })

  // const simpleMarkerSymbol: SimpleMarkerSymbol = createSimpleMarkerSymbol({ color: 'red' })
  
  const polyline: Polyline = createPolyline({
    paths: [thedistrict]
  })

  const simpleLineSymbol: SimpleLineSymbol = createSimpleLineSymbol({
    color: 'blue',
    width: 3,
  })

  // const polygon = createPolygon({
  //   rings: [
  //     [
  //       [-105.1417199036752, 39.71300644400943],
  //       [-104.8720749558585, 39.59773265084695],
  //       [-104.99004625882111, 39.74233057580413],
  //       [-105.1417199036752, 39.71300644400943]
  //     ]
  //   ]
  // })

  // const simpleFillSymbol: SimpleFillSymbol = createSimpleFillSymbol({
  //   color: 'yellow',
  // })
  
  return (
    <Box sx={{ position: 'relative' }}>
      <DropdownSelector
        defaultMap={BASEMAP}
        options={basemaps}
        onChange={setBasemap}
      />
      <ArcMapView mapProperties={{ basemap }} onClick={e => displayCoordinates(e)}>
        <ArcGraphicsLayer>
          {/* <ArcGraphic geometry={point} symbol={simpleMarkerSymbol} /> */}
          <ArcGraphic geometry={polyline} symbol={simpleLineSymbol} />
          {/* <ArcGraphic geometry={polygon} symbol={simpleFillSymbol} /> */}
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