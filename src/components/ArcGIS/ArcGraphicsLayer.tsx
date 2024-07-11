import { ReactNode, useContext, useEffect, useState } from 'react'
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
import { MapViewContext } from '../../context/MapViewContext';
import { GraphicsLayersContext } from '../../context/GraphicsLayerContext';
import { createFeatureLayer } from './layers/createFeatureLayer';
import { ServerType } from '../../types/enums/server';
import { ServiceType } from '../../types/enums/service';
import { useLayerManager } from '../../context/LayerManagerContext';
import { ProblemType } from '../../types/enums/problem';

type ArcGraphicsLayerProps = {
    children?: ReactNode
}

export const ArcGraphicsLayer = ({ children }: ArcGraphicsLayerProps) => {
    const { view } = useContext(MapViewContext)
    const [graphicsLayer, setGraphicsLayer] = useState<GraphicsLayer|undefined>()
    const {
        localGovernmentsToggle,
        serviceAreasToggle,
        specialDistrictsToggle,
        earthViewsToggle,
        stream130acPointsToggle,
        streamSegmentsToggle,
        streamsToggle,
        fema_NFHLToggle,
        floodsplainsNonFEMAToggle,
        floodSummary1965Toggle,
        pmr_FIRMToggle,
        alertRainGaugesToggle,
        problemsToggle,
        projectsToggle,
        projectTypesToggle,
        proposedActionsToggle
    } = useLayerManager()

    useEffect(() => {
        const _graphicsLayer = new GraphicsLayer()
        setGraphicsLayer(_graphicsLayer)
    }, [])
    
    useEffect(() => {
        if (!view || !graphicsLayer) return
        view?.map.add(graphicsLayer)
        localGovernmentsToggle && view?.map.add(createFeatureLayer(ServiceType.BOUNDARIES, 'LocalGovernments', ServerType.MAPSERVER))
        serviceAreasToggle && view?.map.add(createFeatureLayer(ServiceType.BOUNDARIES, 'ServiceAreas', ServerType.MAPSERVER))
        specialDistrictsToggle && view?.map.add(createFeatureLayer(ServiceType.BOUNDARIES, 'SpecialDistricts', ServerType.MAPSERVER))
        earthViewsToggle && view?.map.add(createFeatureLayer(ServiceType.GEOMORPHOLOGY, 'EarthViews', ServerType.MAPSERVER))
        stream130acPointsToggle && view?.map.add(createFeatureLayer(ServiceType.HYDROLOGY, 'Stream130acPoints', ServerType.MAPSERVER))
        streamSegmentsToggle && view?.map.add(createFeatureLayer(ServiceType.HYDROLOGY, 'StreamSegments', ServerType.MAPSERVER))
        streamsToggle && view?.map.add(createFeatureLayer(ServiceType.HYDROLOGY, 'Streams', ServerType.MAPSERVER))
        fema_NFHLToggle && view?.map.add(createFeatureLayer(ServiceType.HYDRAULICS, 'FEMA_NFHL', ServerType.MAPSERVER))
        floodsplainsNonFEMAToggle && view?.map.add(createFeatureLayer(ServiceType.HYDRAULICS, 'FloodsplainsNonFEMA', ServerType.MAPSERVER))
        floodSummary1965Toggle && view?.map.add(createFeatureLayer(ServiceType.HYDRAULICS, 'FloodSummary1965', ServerType.MAPSERVER))
        pmr_FIRMToggle && view?.map.add(createFeatureLayer(ServiceType.HYDRAULICS, 'PMR_FIRM', ServerType.MAPSERVER))
        alertRainGaugesToggle && view?.map.add(createFeatureLayer(ServiceType.MHFD, 'ALERTRainGauges', ServerType.MAPSERVER))
        problemsToggle && (
            view?.map.add(createFeatureLayer(ServiceType.MHFD, 'Problems', ServerType.MAPSERVER, ProblemType.Flood_Hazard_Point)),
            view?.map.add(createFeatureLayer(ServiceType.MHFD, 'Problems', ServerType.MAPSERVER, ProblemType.Stream_Function_Point)),
            view?.map.add(createFeatureLayer(ServiceType.MHFD, 'Problems', ServerType.MAPSERVER, ProblemType.Watershed_Development_Point)),
            view?.map.add(createFeatureLayer(ServiceType.MHFD, 'Problems', ServerType.MAPSERVER, ProblemType.Flood_Hazard_Line)),
            view?.map.add(createFeatureLayer(ServiceType.MHFD, 'Problems', ServerType.MAPSERVER, ProblemType.Stream_Function_Line)),
            view?.map.add(createFeatureLayer(ServiceType.MHFD, 'Problems', ServerType.MAPSERVER, ProblemType.Watershed_Change_Line)),
            view?.map.add(createFeatureLayer(ServiceType.MHFD, 'Problems', ServerType.MAPSERVER, ProblemType.Flood_Hazard_Polygon)),
            view?.map.add(createFeatureLayer(ServiceType.MHFD, 'Problems', ServerType.MAPSERVER, ProblemType.Stream_Function_Polygon)),
            view?.map.add(createFeatureLayer(ServiceType.MHFD, 'Problems', ServerType.MAPSERVER, ProblemType.Watershed_Change_Polygon)),
            view?.map.add(createFeatureLayer(ServiceType.MHFD, 'Problems', ServerType.MAPSERVER, ProblemType.Problem_Groups))
        )
        projectsToggle && view?.map.add(createFeatureLayer(ServiceType.MHFD, 'Projects', ServerType.MAPSERVER))
        projectTypesToggle && view?.map.add(createFeatureLayer(ServiceType.MHFD, 'ProjectTypes', ServerType.MAPSERVER))
        proposedActionsToggle && view?.map.add(createFeatureLayer(ServiceType.MHFD, 'ProposedActions', ServerType.MAPSERVER))

        return () => {
            view?.map.removeAll()
        }

    }, [
        view,
        graphicsLayer,
        localGovernmentsToggle,
        serviceAreasToggle,
        specialDistrictsToggle,
        earthViewsToggle,
        stream130acPointsToggle,
        streamSegmentsToggle,
        streamsToggle,
        fema_NFHLToggle,
        floodsplainsNonFEMAToggle,
        floodSummary1965Toggle,
        pmr_FIRMToggle,
        alertRainGaugesToggle,
        problemsToggle,
        projectsToggle,
        projectTypesToggle,
        proposedActionsToggle
    ])

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