export type Legend = {
    layers: Layers[]
}

type Layers = {
    layerId: number
    layerName: string
    layerType: string
    minScale: number
    maxScale: number
    legend: LegendData[]
    legendGroups: LegendGroup[]
}

type LegendData = {
    label: string
    url: string
    imageData: string
    contentType: string
    groupId: string
    height: number
    width: number
    values: [number]
}

type LegendGroup = {
    id: string
    heading: string
}