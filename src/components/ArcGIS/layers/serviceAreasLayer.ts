import { Layer } from "../types/layer"
import { ServerType } from "../../../types/enums/server"
import { ServiceType } from "../../../types/enums/service"
import { ServiceArea } from "../types/serviceArea"
import { createFeatureLayer } from "../utilities/createFeatureLayer"
import images from '../images/watershedManagers';

export const serviceAreas = createFeatureLayer(ServiceType.BOUNDARIES, 'ServiceAreas', ServerType.MAPSERVER, null,
    {
        outFields: ['*'],
        title: 'Service Areas',
        content: ({ graphic }: Layer<ServiceArea>) => { 
            const layer = graphic.attributes

            return (
                `<>
                    <div><b>Service Area</b>: ${layer.service_area_name}</div>
                    <div><b>Watershed Manager</b>: ${layer.watershed_manager}</div>
                    <div><b>Cities</b>: ${layer.cities}</div>
                    <div><b>Construction Managers</b>: ${layer.construction_managers}</div>
                    <div><b>Construction Counties</b>: ${layer.construction_counties}</div>
                    <div><b>Area Total (ac)</b>: ${layer.area_total_acres}</div>
                    <div><b>Area Total (mi²)</b>: ${layer.area_total_sqmi}</div>
                    <img src=${images[layer.AttachID - 1]} />
                </>`
            )
        }
    }
)