import FeatureLayer from "@arcgis/core/layers/FeatureLayer";

export const featureLayer = new FeatureLayer({
    url: 'https://gis.mhfd.org/server/rest/services/Hydrology/Streams/MapServer'
})