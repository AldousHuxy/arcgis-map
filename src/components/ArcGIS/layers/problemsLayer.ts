import { ProblemType } from '../../../types/enums/problem';
import { ServerType } from '../../../types/enums/server';
import { ServiceType } from '../../../types/enums/service';
import { createFeatureLayer } from '../utilities/createFeatureLayer';

// TODO - Move these to their own files
export const localGovernments = createFeatureLayer(ServiceType.BOUNDARIES, 'LocalGovernments', ServerType.MAPSERVER, null)
export const earthViews = createFeatureLayer(ServiceType.GEOMORPHOLOGY, 'EarthViews', ServerType.MAPSERVER, null)
export const stream130acPoints = createFeatureLayer(ServiceType.HYDROLOGY, 'Stream130acPoints', ServerType.MAPSERVER, null)
export const streamSegments = createFeatureLayer(ServiceType.HYDROLOGY, 'StreamSegments', ServerType.MAPSERVER, null)
export const fema_NFHL = createFeatureLayer(ServiceType.HYDRAULICS, 'FEMA_NFHL', ServerType.MAPSERVER)
export const floodsplainsNonFEMA = createFeatureLayer(ServiceType.HYDRAULICS, 'FloodsplainsNonFEMA', ServerType.MAPSERVER, null)
export const floodSummary1965 = createFeatureLayer(ServiceType.HYDRAULICS, 'FloodSummary1965', ServerType.MAPSERVER, null)
export const pmr_FIRM = createFeatureLayer(ServiceType.HYDRAULICS, 'PMR_FIRM', ServerType.MAPSERVER, null)
export const alertRainGauges = createFeatureLayer(ServiceType.MHFD, 'ALERTRainGauges', ServerType.MAPSERVER, null)

export const problemsFloodHazardPoint = createFeatureLayer(ServiceType.MHFD, 'Problems', ServerType.MAPSERVER, ProblemType.Flood_Hazard_Point)
export const problemsStreamFunctionPoint = createFeatureLayer(ServiceType.MHFD, 'Problems', ServerType.MAPSERVER, ProblemType.Stream_Function_Point)
export const problemsWatershedDevelopment_Point = createFeatureLayer(ServiceType.MHFD, 'Problems', ServerType.MAPSERVER, ProblemType.Watershed_Development_Point)
export const problemsFloodHazardLine = createFeatureLayer(ServiceType.MHFD, 'Problems', ServerType.MAPSERVER, ProblemType.Flood_Hazard_Line)
export const problemsStreamFunctionLine = createFeatureLayer(ServiceType.MHFD, 'Problems', ServerType.MAPSERVER, ProblemType.Stream_Function_Line)
export const problemsWatershed_Change_Line = createFeatureLayer(ServiceType.MHFD, 'Problems', ServerType.MAPSERVER, ProblemType.Watershed_Change_Line)
export const problemsFloodHazardPolygon = createFeatureLayer(ServiceType.MHFD, 'Problems', ServerType.MAPSERVER, ProblemType.Flood_Hazard_Polygon)
export const problemsStreamFunctionPolygon = createFeatureLayer(ServiceType.MHFD, 'Problems', ServerType.MAPSERVER, ProblemType.Stream_Function_Polygon)
export const problemsWatershedChangePolygon = createFeatureLayer(ServiceType.MHFD, 'Problems', ServerType.MAPSERVER, ProblemType.Watershed_Change_Polygon)
export const problemsProblemGroups = createFeatureLayer(ServiceType.MHFD, 'Problems', ServerType.MAPSERVER, ProblemType.Problem_Groups)

// TODO - Move these to their own files
export const projectTypes = createFeatureLayer(ServiceType.MHFD, 'ProjectTypes', ServerType.MAPSERVER, null)
