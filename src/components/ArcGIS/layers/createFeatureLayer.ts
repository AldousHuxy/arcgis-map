import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import { ServiceType } from "../../../types/enums/service";
import { ServerType } from "../../../types/enums/server";

export const createFeatureLayer = (serviceType: ServiceType, service: string, serverType: ServerType, layer?: number|string): FeatureLayer => {
    if (layer) {
        return new FeatureLayer({ url: `https://gis.mhfd.org/server/rest/services/${serviceType}/${service}/${serverType}/${layer}` })
    } else {
        return new FeatureLayer({ url: `https://gis.mhfd.org/server/rest/services/${serviceType}/${service}/${serverType}` })
    }
}