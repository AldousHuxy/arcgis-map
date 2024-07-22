import { ProblemType } from "../../../types/enums/problem"
import { ServerType } from "../../../types/enums/server"
import { ServiceType } from "../../../types/enums/service"
import { createFeatureLayer } from "./createFeatureLayer"

export const localGovernments = createFeatureLayer(ServiceType.BOUNDARIES, 'LocalGovernments', ServerType.MAPSERVER)
export const serviceAreas = createFeatureLayer(ServiceType.BOUNDARIES, 'ServiceAreas', ServerType.MAPSERVER)
export const specialDistricts = createFeatureLayer(ServiceType.BOUNDARIES, 'SpecialDistricts', ServerType.MAPSERVER)
export const earthViews = createFeatureLayer(ServiceType.GEOMORPHOLOGY, 'EarthViews', ServerType.MAPSERVER)
export const stream130acPoints = createFeatureLayer(ServiceType.HYDROLOGY, 'Stream130acPoints', ServerType.MAPSERVER)
export const streamSegments = createFeatureLayer(ServiceType.HYDROLOGY, 'StreamSegments', ServerType.MAPSERVER)
export const streams = createFeatureLayer(ServiceType.HYDROLOGY, 'Streams', ServerType.MAPSERVER)
export const fema_NFHL = createFeatureLayer(ServiceType.HYDRAULICS, 'FEMA_NFHL', ServerType.MAPSERVER)
export const floodsplainsNonFEMA = createFeatureLayer(ServiceType.HYDRAULICS, 'FloodsplainsNonFEMA', ServerType.MAPSERVER)
export const floodSummary1965 = createFeatureLayer(ServiceType.HYDRAULICS, 'FloodSummary1965', ServerType.MAPSERVER)
export const pmr_FIRM = createFeatureLayer(ServiceType.HYDRAULICS, 'PMR_FIRM', ServerType.MAPSERVER)
export const alertRainGauges = createFeatureLayer(ServiceType.MHFD, 'ALERTRainGauges', ServerType.MAPSERVER)
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
export const projects = createFeatureLayer(ServiceType.MHFD, 'Projects', ServerType.MAPSERVER)
export const projectTypes = createFeatureLayer(ServiceType.MHFD, 'ProjectTypes', ServerType.MAPSERVER)
export const proposedActions = createFeatureLayer(ServiceType.MHFD, 'ProposedActions', ServerType.MAPSERVER)