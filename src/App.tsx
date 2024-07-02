import { useState } from 'react';
import Box from '@mui/material/Box';
import { BASEMAP } from './constants';
import { ArcGraphic } from './components/ArcGIS/ArcGraphic';
import { ArcGraphicsLayer } from './components/ArcGIS/ArcGraphicsLayer';
import { ArcMapView } from './components/ArcGIS/ArcMapView';
import { createPoint } from './components/ArcGIS/utilities/geometry/createPoint';
import { createSimpleMarkerSymbol } from './components/ArcGIS/utilities/symbols/createSimpleMarkerSymbol';
// import { createPolyline } from './components/ArcGIS/utilities/geometry/createPolyline';
// import { createSimpleLineSymbol } from './components/ArcGIS/utilities/symbols/createSimpleLineSymbol';
import { createPolygon } from './components/ArcGIS/utilities/geometry/createPolygon';
import { createSimpleFillSymbol } from './components/ArcGIS/utilities/symbols/createSimpleFillSymbol';
import { DropdownSelector } from './components/DropdownSelector';
import districtLines from './data/district-lines.json';
import { useGetLocationsQuery } from './api/useGetLocationsQuery';
import { basemaps } from './components/ArcGIS/data/basemaps';

const App = () => {
  const [basemap, setBasemap] = useState<string>('osm')
  const { data: locations } = useGetLocationsQuery()

  return (
    <Box sx={{ position: 'relative' }}>
      <DropdownSelector
        defaultMap={BASEMAP}
        options={basemaps}
        onChange={setBasemap}
      />
      <ArcMapView mapProperties={{ basemap }} onClick={e => displayCoordinates(e)}>
        <ArcGraphicsLayer>
          {locations.map(location => (
            <ArcGraphic
              key={location._id}
              geometry={createPoint({ longitude: location.longitude, latitude: location.latitude })}
              symbol={createSimpleMarkerSymbol({ color: [125, 255, 13, 0.25] })}
            />
          ))}
          {/* <ArcGraphic
            geometry={createPolyline({ paths: [thedistrict] })}
            symbol={createSimpleLineSymbol({ color: 'blue', width: 3, })}
          /> */}
          <ArcGraphic
            geometry={createPolygon({ rings: [districtLines] })}
            symbol={createSimpleFillSymbol({ color: [0, 0, 0, 0.125] })}
          />
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