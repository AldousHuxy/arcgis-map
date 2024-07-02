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

    /* Boundaries */
    const localGovernmentsLayer = createFeatureLayer(ServiceType.BOUNDARIES, 'LocalGovernments', ServerType.MAPSERVER)
    const serviceAreasLayer = createFeatureLayer(ServiceType.BOUNDARIES, 'ServiceAreas', ServerType.MAPSERVER)
    const specialDistrictsLayer = createFeatureLayer(ServiceType.BOUNDARIES, 'SpecialDistricts', ServerType.MAPSERVER)
    
    /* Geomorphology */
    const geomorphologyLayer = createFeatureLayer(ServiceType.GEOMORPHOLOGY, 'EarthViews', ServerType.MAPSERVER)

    /* Hydrology */
    const streams130acPointsLayer = createFeatureLayer(ServiceType.HYDROLOGY, 'Stream130acPoints', ServerType.MAPSERVER)
    const streamsSegmentsLayer = createFeatureLayer(ServiceType.HYDROLOGY, 'StreamSegments', ServerType.MAPSERVER)
    const streamsLayer = createFeatureLayer(ServiceType.HYDROLOGY, 'Streams', ServerType.MAPSERVER)
    
    /* Hydraulics */
    const femaNFHLLayer = createFeatureLayer(ServiceType.HYDRAULICS, 'FEMA_NFHL', ServerType.MAPSERVER)
    const floodplainsNonFEMALayer = createFeatureLayer(ServiceType.HYDRAULICS, 'FloodsplainsNonFEMA', ServerType.MAPSERVER)
    const floodSummary1965Layer = createFeatureLayer(ServiceType.HYDRAULICS, 'FloodSummary1965', ServerType.MAPSERVER)
    const pmrFirmLayer = createFeatureLayer(ServiceType.HYDRAULICS, 'PMR_FIRM', ServerType.MAPSERVER)
    
    /* MHFD */
    const alertRainGaugesLayers = createFeatureLayer(ServiceType.MHFD, 'ALERTRainGauges', ServerType.MAPSERVER)
    const problemsLayer = createFeatureLayer(ServiceType.MHFD, 'Problems', ServerType.MAPSERVER)
    const projectsLayer = createFeatureLayer(ServiceType.MHFD, 'Projects', ServerType.MAPSERVER)
    const projectTypesLayer = createFeatureLayer(ServiceType.MHFD, 'ProjectTypes', ServerType.MAPSERVER)
    const proposedActionsLayer = createFeatureLayer(ServiceType.MHFD, 'ProposedActions', ServerType.MAPSERVER)

    useEffect(() => {
        const _graphicsLayer = new GraphicsLayer()
        setGraphicsLayer(_graphicsLayer)
    }, [])
    
    useEffect(() => {
        if (!view || !graphicsLayer) return
        view?.map.add(graphicsLayer)
        // view?.map.add(localGovernmentsLayer)
        // view?.map.add(serviceAreasLayer)
        // view?.map.add(specialDistrictsLayer)
        // view?.map.add(geomorphologyLayer)
        // view?.map.add(streamsSegmentsLayer)
        // view?.map.add(streamsSegmentsLayer)
        view?.map.add(streamsLayer)
        // view?.map.add(femaNFHLLayer)
        // view?.map.add(floodplainsNonFEMALayer)
        // view?.map.add(floodSummary1965Layer)
        // view?.map.add(pmrFirmLayer)
        // view?.map.add(alertRainGaugesLayers)
        // view?.map.add(problemsLayer)
        // view?.map.add(projectsLayer)
        // view?.map.add(projectTypesLayer)
        // view?.map.add(proposedActionsLayer)
    }, [view, graphicsLayer])

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