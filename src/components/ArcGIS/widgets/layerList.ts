import LayerList from "@arcgis/core/widgets/LayerList";
import LayerListCatalogOptions from "@arcgis/core/widgets/LayerList";

export const layerList = (view: __esri.MapView) => new LayerList({
    catalogOptions: {} as  LayerListCatalogOptions,
    collapsed: false,
    dragEnabled: true,
    view
})