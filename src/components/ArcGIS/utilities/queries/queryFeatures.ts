export const queryFeatures = async (feature: __esri.FeatureLayer): Promise<__esri.Graphic[]> => {
    return (await feature.queryFeatures()).features
}