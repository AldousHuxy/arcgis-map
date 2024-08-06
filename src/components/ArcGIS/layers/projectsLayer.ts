import { ServerType } from "../../../types/enums/server";
import { ServiceType } from "../../../types/enums/service";
import { Layer } from "../types/layer";
import { Project } from "../types/projects";
import { createFeatureLayer } from "../utilities/createFeatureLayer";

export const projects = createFeatureLayer(ServiceType.MHFD, 'Projects', ServerType.MAPSERVER, null, {
    outFields: ['*'],
    title: 'Projects',
    content: ({ graphic }: Layer<Project>) => { 
        const layer = graphic.attributes

        return (
            `<>
                <div><b>Project Id</b>: ${layer.project_id}</div>
                <div><b>Project Name</b>: ${layer.project_name}</div>
                <div><b>OnBase Project Number</b>: ${layer.onbase_project_number}</div>
                <div><b>Project Description</b>: ${layer.project_description}</div>
                <div><b>Project Short Note</b>: ${layer.project_short_note}</div>
                <div><b>County</b>: ${layer.project_type_name}</div>
                <div><b>Status Name</b>: ${layer.status_name}</div>
                <div><b>Phase Name</b>: ${layer.phase_name}</div>
                <div><b>Service Areas</b>: ${layer.service_areas}</div>
                <div><b>Counties</b>: ${layer.counties}</div>
                <div><b>Local Government</b>: ${layer.local_governments}</div>
            </>`
        )
    }
})
