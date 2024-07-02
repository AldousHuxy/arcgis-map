import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import { ServiceType } from "../../../types/enums/service";
import { ServerType } from "../../../types/enums/server";

export const createFeatureLayer = (serviceType: ServiceType, service: string, serverType: ServerType): FeatureLayer => {
    return new FeatureLayer({ url: `https://gis.mhfd.org/server/rest/services/${serviceType}/${service}/${serverType}` })
}