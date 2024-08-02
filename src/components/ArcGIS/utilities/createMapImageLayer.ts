import MapImageLayer from '@arcgis/core/layers/MapImageLayer';
import { ServiceType } from '../../../types/enums/service';
import { ServerType } from '../../../types/enums/server';

export const createMapImageLayer = (serviceType: ServiceType, service: string, serverType: ServerType, layer?: number|string): MapImageLayer => {
    if (layer) {
        return new MapImageLayer({ url: `https://gis.mhfd.org/server/rest/services/${serviceType}/${service}/${serverType}/${layer}` })
    } else {
        return new MapImageLayer({ url: `https://gis.mhfd.org/server/rest/services/${serviceType}/${service}/${serverType}` })
    }
}