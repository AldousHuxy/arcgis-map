import { Layer } from "../types/layer"
import { ServerType } from "../../../types/enums/server"
import { ServiceType } from "../../../types/enums/service"
import { Stream } from "../types/stream"
import { createFeatureLayer } from "../utilities/createFeatureLayer"

export const streams = createFeatureLayer(ServiceType.HYDROLOGY, 'Streams', ServerType.MAPSERVER, null, {
    outFields: ['*'],
    title: 'Streams',
    content: ({ graphic }: Layer<Stream>) => {
        const layer = graphic.attributes

        return (
            `<>
                <div><b>Major Stream Legacy Code</b>: ${layer.major_stream_legacy_code}</div>
                <div><b>Major Stream Name</b>: ${layer.major_stream_name}</div>
                <div><b>Legacy Code</b>: ${layer.legacy_code}</div>
                <div><b>Legacy Name</b>: ${layer.legacy_name}</div>
                <div><b>Object Id</b>: ${layer.OBJECTID}</div>
                <div><b>Stream Id</b>: ${layer.stream_id}</div>
                <div><b>Stream Name</b>: ${layer.stream_name}</div>
                <div><b>MHFD Code Stream</b>: ${layer.mhfd_code_stream}</div>
                <div><b>Max Catchment Sum (ac)</b>: ${layer.max_catchment_sum_ac}</div>
                <div><b>Sum Stream Length (ft)</b>: ${layer.sum_stream_length_ft}</div>
                <div><b>Sum Stream Length (mi)</b>: ${layer.sum_stream_length_miles}</div>
                <div><b>Sum Catchment Area (ac)</b>: ${layer.sum_catchment_area_ac}</div>
                <div><b>Reach Code</b>: ${layer.reach_code}</div>
            </>`
        )
    }
})