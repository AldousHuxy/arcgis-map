import { ServerType } from "../../../types/enums/server";
import { ServiceType } from "../../../types/enums/service";
import { createFeatureLayer } from "../utilities/createFeatureLayer";

export const projects = createFeatureLayer(ServiceType.MHFD, 'Projects', ServerType.MAPSERVER, null)
