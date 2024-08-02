import { ServerType } from "../../../types/enums/server";
import { ServiceType } from "../../../types/enums/service";
import { createFeatureLayer } from "../utilities/createFeatureLayer";

export const specialDistricts = createFeatureLayer(ServiceType.BOUNDARIES, 'SpecialDistricts', ServerType.MAPSERVER, null)
