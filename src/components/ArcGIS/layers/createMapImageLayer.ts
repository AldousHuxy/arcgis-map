import MapImageLayer from '@arcgis/core/layers/MapImageLayer';

export const createMapImageLayer = (url: string) => new MapImageLayer({ url })