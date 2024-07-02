import TileLayer from '@arcgis/core/layers/TileLayer';

export const tileLayer = new TileLayer({
    url: 'https://gis.mhfd.org/server/rest/services/Hydrology/Streams/MapServer'
})