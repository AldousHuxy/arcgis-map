import { useState } from 'react';
import Box from '@mui/material/Box';
import { BASEMAP } from './constants';
import { ArcGraphic } from './components/ArcGIS/ArcGraphic';
import { ArcGraphicsLayer } from './components/ArcGIS/ArcGraphicsLayer';
import { ArcMapView } from './components/ArcGIS/ArcMapView';
import { createPoint } from './components/ArcGIS/utilities/geometry/createPoint';
import { createSimpleMarkerSymbol } from './components/ArcGIS/utilities/symbols/createSimpleMarkerSymbol';
import { createPolygon } from './components/ArcGIS/utilities/geometry/createPolygon';
import { createSimpleFillSymbol } from './components/ArcGIS/utilities/symbols/createSimpleFillSymbol';
import { DropdownSelector } from './components/DropdownSelector';
import { useGetAllLocationsQuery } from './api/useGetAllLocationsQuery';
import { basemaps } from './components/ArcGIS/data/basemaps';
import { getViewCoordinates } from './components/ArcGIS/utilities/getViewCoordinates';
import rings from './data/district.json';

const App = () => {
  const [basemap, setBasemap] = useState<string>('osm')
  const { data: locations, isLoading } = useGetAllLocationsQuery()

  const handleClick = (e: __esri.ViewClickEvent) => {
    console.log(getViewCoordinates(e))
  }

  if (isLoading) return

  return (
    <Box sx={{ position: 'relative' }}>
      <DropdownSelector
        defaultMap={BASEMAP}
        options={basemaps}
        onChange={setBasemap}
      />
      <ArcMapView mapProperties={{ basemap }} onClick={handleClick}>
        <ArcGraphicsLayer>
          {locations.map(({ _id, longitude, latitude, color }) => (
            <ArcGraphic
              key={_id}
              geometry={createPoint({ longitude, latitude })}
              symbol={createSimpleMarkerSymbol({ color })}
            />
          ))}

          <ArcGraphic
            geometry={createPolygon({ rings })}
            symbol={createSimpleFillSymbol({ color: [0, 0, 0, 0.125] })}
          />
        </ArcGraphicsLayer>
      </ArcMapView>
    </Box>
  )
}

export default App;