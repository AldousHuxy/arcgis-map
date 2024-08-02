import TileLayer from '@arcgis/core/layers/TileLayer';

export const createTileLayer = (url: string) => new TileLayer({ url })