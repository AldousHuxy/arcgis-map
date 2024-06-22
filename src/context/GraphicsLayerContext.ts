import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
import { createContext } from 'react';

type GraphicsLayersContext = {
    graphicsLayer: GraphicsLayer|undefined
}

export const GraphicsLayersContext = createContext({} as GraphicsLayersContext)