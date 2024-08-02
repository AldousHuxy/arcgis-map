import { ServerType } from "../../../types/enums/server";
import { ServiceType } from "../../../types/enums/service";
import { createFeatureLayer } from "../utilities/createFeatureLayer";

export const proposedActions = createFeatureLayer(ServiceType.MHFD, 'ProposedActions', ServerType.MAPSERVER, null)