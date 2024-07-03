import { ReactNode, useContext, useEffect, useState } from 'react'
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
import { MapViewContext } from '../../context/MapViewContext';
import { GraphicsLayersContext } from '../../context/GraphicsLayerContext';
import { createFeatureLayer } from './layers/createFeatureLayer';
import { ServerType } from '../../types/enums/server';
import { ServiceType } from '../../types/enums/service';

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
        // view?.map.add(createFeatureLayer(ServiceType.BOUNDARIES, 'LocalGovernments', ServerType.MAPSERVER))
        // view?.map.add(createFeatureLayer(ServiceType.BOUNDARIES, 'ServiceAreas', ServerType.MAPSERVER))
        // view?.map.add(createFeatureLayer(ServiceType.BOUNDARIES, 'SpecialDistricts', ServerType.MAPSERVER))
        // view?.map.add(createFeatureLayer(ServiceType.GEOMORPHOLOGY, 'EarthViews', ServerType.MAPSERVER))
        // view?.map.add(createFeatureLayer(ServiceType.HYDROLOGY, 'Stream130acPoints', ServerType.MAPSERVER))
        // view?.map.add(createFeatureLayer(ServiceType.HYDROLOGY, 'StreamSegments', ServerType.MAPSERVER))
        // view?.map.add(createFeatureLayer(ServiceType.HYDROLOGY, 'Streams', ServerType.MAPSERVER))
        // view?.map.add(createFeatureLayer(ServiceType.HYDRAULICS, 'FEMA_NFHL', ServerType.MAPSERVER))
        // view?.map.add(createFeatureLayer(ServiceType.HYDRAULICS, 'FloodsplainsNonFEMA', ServerType.MAPSERVER))
        // view?.map.add(createFeatureLayer(ServiceType.HYDRAULICS, 'FloodSummary1965', ServerType.MAPSERVER))
        // view?.map.add(createFeatureLayer(ServiceType.HYDRAULICS, 'PMR_FIRM', ServerType.MAPSERVER))
        // view?.map.add(createFeatureLayer(ServiceType.MHFD, 'ALERTRainGauges', ServerType.MAPSERVER))
        // view?.map.add(createFeatureLayer(ServiceType.MHFD, 'Problems', ServerType.MAPSERVER))
        // view?.map.add(createFeatureLayer(ServiceType.MHFD, 'Projects', ServerType.MAPSERVER))
        // view?.map.add(createFeatureLayer(ServiceType.MHFD, 'ProjectTypes', ServerType.MAPSERVER))
        // view?.map.add(createFeatureLayer(ServiceType.MHFD, 'ProposedActions', ServerType.MAPSERVER))
    }, [view, graphicsLayer])

    return (
        <>
            {graphicsLayer && (
                <GraphicsLayersContext.Provider value={{ graphicsLayer }}>
                    {children}
                </GraphicsLayersContext.Provider>
            )}
        </>
    )
}