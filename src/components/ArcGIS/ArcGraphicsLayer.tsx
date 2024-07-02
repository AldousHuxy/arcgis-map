import { ReactNode, useContext, useEffect, useState } from 'react'
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
import { MapViewContext } from '../../context/MapViewContext';
import { GraphicsLayersContext } from '../../context/GraphicsLayerContext';
import { featureLayer } from './layers/FeatureLayer';

type ArcGraphicsLayerProps = {
    children?: ReactNode
}

export const ArcGraphicsLayer = ({ children }: ArcGraphicsLayerProps) => {
    const { view } = useContext(MapViewContext)
    const [graphicsLayer, setGraphicsLayer] = useState<GraphicsLayer|undefined>()

    useEffect(() => {
        const _graphicsLayer = new GraphicsLayer()
        setGraphicsLayer(_graphicsLayer)
    }, [])
    
    useEffect(() => {
        if (!view || !graphicsLayer) return
        view?.map.add(graphicsLayer)
        view?.map.add(featureLayer)
    }, [view, graphicsLayer, featureLayer])

    return (
        <>
            {graphicsLayer && 
                (
                    <GraphicsLayersContext.Provider value={{ graphicsLayer }}>
                        {children}
                    </GraphicsLayersContext.Provider>
                )
            }
        </>
    )
}