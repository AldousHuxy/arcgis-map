import { useContext, useEffect, useState } from 'react';
import Graphic from '@arcgis/core/Graphic';
import Point from '@arcgis/core/geometry/Point';
import SimpleMarkerSymbol from '@arcgis/core/symbols/SimpleMarkerSymbol';
import { GraphicsLayersContext } from '../../context/GraphicsLayerContext';
import Polyline from '@arcgis/core/geometry/Polyline';
import SimpleLineSymbol from '@arcgis/core/symbols/SimpleLineSymbol';
import Polygon from '@arcgis/core/geometry/Polygon';
import SimpleFillSymbol from '@arcgis/core/symbols/SimpleFillSymbol';

type ArcGraphicProps = {
    geometry: Point|Polyline|Polygon
    symbol: SimpleMarkerSymbol|SimpleLineSymbol|SimpleFillSymbol
}

export const ArcGraphic = ({ geometry, symbol }: ArcGraphicProps) => {
    const { graphicsLayer } = useContext(GraphicsLayersContext)
    const [graphic, setGraphic] = useState<Graphic|undefined>()

    useEffect(() => {        
        const graphicPoint = new Graphic({ geometry, symbol })

        setGraphic(graphicPoint)
    }, [])
    
    useEffect(() => {
        if (!graphic || !graphicsLayer) return
        graphicsLayer.add(graphic)
    }, [graphic, graphicsLayer])

    return (
        <></>
    )
}