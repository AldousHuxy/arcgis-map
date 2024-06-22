import MapView from '@arcgis/core/views/MapView';
import { createContext } from 'react';

type MapViewContext = { view: MapView|undefined }

export const MapViewContext = createContext({} as MapViewContext)