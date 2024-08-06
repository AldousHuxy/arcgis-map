import { ServerType } from "../../../types/enums/server";
import { ServiceType } from "../../../types/enums/service";
import { Layer } from "../types/layer";
import { ProposeActions } from "../types/proposedActions";
import { createFeatureLayer } from "../utilities/createFeatureLayer";

export const proposedActions = createFeatureLayer(ServiceType.MHFD, 'ProposedActions', ServerType.MAPSERVER, null, {
    outFields: ['*'],
    title: 'Proposed Actions',
    content: ({ graphic }: Layer<ProposeActions>) => { 
        const layer = graphic.attributes

        return (
            `<>
                <div><b>Object Id</b>: ${layer.OBJECTID}</div>
                <div><b>Subtype</b>: ${layer.subtype}</div>
                <div><b>Quantity</b>: ${layer.quantity}</div>
                <div><b>MHFD Manager</b>: ${layer.mhfdmanager}</div>
                <div><b>Service Area</b>: ${layer.servicearea}</div>
                <div><b>County</b>: ${layer.county}</div>
                <div><b>Component Id</b>: ${layer.component_id}</div>
            </>`
        )
    }
})