import MapImageLayer from '@arcgis/core/layers/MapImageLayer';

export const mapImageLayer = new MapImageLayer({
    url: 'https://gis.mhfd.org/server/rest/services/Hydrology/Streams/MapServer'
})