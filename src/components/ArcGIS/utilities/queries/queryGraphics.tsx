import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';

export const queryGraphics = async (view: __esri.MapView, graphicsLayer: GraphicsLayer): Promise<__esri.Collection<__esri.Graphic>> => {
  const graphicsLayerView: __esri.GraphicsLayerView = await view.whenLayerView(graphicsLayer)

  const graphics: __esri.Collection<__esri.Graphic> = await graphicsLayerView.queryGraphics()

  return graphics
}