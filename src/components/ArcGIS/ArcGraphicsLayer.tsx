import { ReactNode, useContext, useEffect, useState } from 'react'
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
import { MapViewContext } from '../../context/MapViewContext';
import { GraphicsLayersContext } from '../../context/GraphicsLayerContext';
import { useLayerManager } from '../../context/LayerManagerContext';
import LayerList from '@arcgis/core/widgets/LayerList';
import Search from '@arcgis/core/widgets/Search';
import Locate from '@arcgis/core/widgets/Locate';
import {
    alertRainGauges,
    earthViews,
    fema_NFHL,
    floodsplainsNonFEMA,
    floodSummary1965,
    localGovernments,
    pmr_FIRM,
    problemsFloodHazardLine,
    problemsFloodHazardPoint,
    problemsFloodHazardPolygon,
    problemsProblemGroups,
    problemsStreamFunctionLine,
    problemsStreamFunctionPoint,
    problemsStreamFunctionPolygon,
    problemsWatershed_Change_Line,
    problemsWatershedChangePolygon,
    problemsWatershedDevelopment_Point,
    projectTypes,
    stream130acPoints,
    streamSegments
} from './layers/problemsLayer';
import { serviceAreas } from './layers/serviceAreasLayer';
import { streams } from './layers/streamsLayer';
import { projects } from './layers/projectsLayer';
import { proposedActions } from './layers/proposedActionsLayer';
import { specialDistricts } from './layers/specialDistricts';
import { locate } from './widgets/locate';
import { search } from './widgets/search';
import { layerList } from './widgets/layerList';
import { Position } from './types/enums/position';

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
        localGovernmentsToggle && view?.map.add(localGovernments)
        serviceAreasToggle && view?.map.add(serviceAreas)
        specialDistrictsToggle && view?.map.add(specialDistricts)
        earthViewsToggle && view?.map.add(earthViews)
        stream130acPointsToggle && view?.map.add(stream130acPoints)
        streamSegmentsToggle && view?.map.add(streamSegments)
        streamsToggle && view?.map.add(streams)
        fema_NFHLToggle && view?.map.add(fema_NFHL)
        floodsplainsNonFEMAToggle && view?.map.add(floodsplainsNonFEMA)
        floodSummary1965Toggle && view?.map.add(floodSummary1965)
        pmr_FIRMToggle && view?.map.add(pmr_FIRM)
        alertRainGaugesToggle && view?.map.add(alertRainGauges)
        problemsToggle && (
            view?.map.add(problemsFloodHazardPoint),
            view?.map.add(problemsStreamFunctionPoint),
            view?.map.add(problemsWatershedDevelopment_Point),
            view?.map.add(problemsFloodHazardLine),
            view?.map.add(problemsStreamFunctionLine),
            view?.map.add(problemsWatershed_Change_Line),
            view?.map.add(problemsFloodHazardPolygon),
            view?.map.add(problemsStreamFunctionPolygon),
            view?.map.add(problemsWatershedChangePolygon),
            view?.map.add(problemsProblemGroups)
        )
        projectsToggle && view?.map.add(projects)
        projectTypesToggle && view?.map.add(projectTypes)
        proposedActionsToggle && view?.map.add(proposedActions)
        
        view.ui.add(locate(view), { position: Position.TOP_LEFT })
        view.ui.add(search(view), { position: Position.TOP_RIGHT })
        view.ui.add(layerList(view), { position: Position.TOP_TRAILING })

        return () => {
            view?.map.removeAll()
            view?.ui.destroy()
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