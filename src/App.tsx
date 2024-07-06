import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
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
import { Navbar } from './components/Navbar';
import { LayerManagerHeader, LayerManager } from './components/LayerManager/LayerManager';
import { LayerManagerProvider } from './context/LayerManagerContext';


export const App = () => {
  const drawerWidth: number = 240
  const [basemap, setBasemap] = useState<string>('osm')
  // const { data: locations, isLoading } = useGetAllLocationsQuery()
  
  const [open, setOpen] = useState<boolean>(false)
  const handleClick = (e: __esri.ViewClickEvent) => console.log(getViewCoordinates(e))

  // if (isLoading) return

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Navbar position="fixed" open={open} drawerWidth={drawerWidth}>
        <Toolbar>
          <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={() => setOpen(true)}
              edge="start"
              sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
              <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">ArcGIS Map</Typography>
        </Toolbar>
      </Navbar>
      <LayerManagerProvider>
        <LayerManager open={open} handleDrawerClose={() => setOpen(false)} drawerWidth={drawerWidth} />
        <Main open={open} drawerWidth={drawerWidth}>
            <LayerManagerHeader />
            <Box sx={{ position: 'relative' }}>
              <DropdownSelector
                defaultMap={BASEMAP}
                options={basemaps}
                onChange={setBasemap}
              />
              <ArcMapView mapProperties={{ basemap }} onClick={handleClick}>
                <ArcGraphicsLayer>
                  {/* {locations.map(({ _id, longitude, latitude, color }) => (
                    <ArcGraphic
                      key={_id}
                      geometry={createPoint({ longitude, latitude })}
                      symbol={createSimpleMarkerSymbol({ color })}
                    />
                  ))} */}

                  <ArcGraphic
                    geometry={createPolygon({ rings })}
                    symbol={createSimpleFillSymbol({ color: [0, 0, 0, 0.125] })}
                  />
                </ArcGraphicsLayer>
              </ArcMapView>
            </Box>
        </Main>
      </LayerManagerProvider>
    </Box>
  )
}

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{ open?: boolean, drawerWidth: number }>(({ theme, open, drawerWidth }) => ({
  flexGrow: 1,
  transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
      transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
  })
}))

export default App;