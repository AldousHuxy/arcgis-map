# ArcGIS Map
### Requirements
- [NodeJS](https://nodejs.org/en)

### Getting Started
- To install dependencies
```bash
npm install
```
- To start application
```bash
npm start
```

| Class    | Data Storage    | Savings |
| -------- | -------- | ------- |
| Feature Layer  | Geographic data stored in ArcGIS Online or ArcGIS Enterprise.  | Displaying, querying, filtering and editing large amounts of geographic features.    |
| GraphicsLayer | Geographic data stored temporarily in memory. | Displaying, querying, filtering and editing large amounts of geographic features.    |
| CSVLayer/KMLLayer/GeoJSONLayer | Geographic or tabular data stored in an external file accessed over a network.    | Displaying individual geographic features as graphics, visual aids or text on the map.   |
| TileLayer/VectorTileLayer | Datasets stored in a tile scheme for fast rendering.    | Displaying data stored in an external file format as a layer.    |
| MapImageLayer | Geographic data stored in ArcGIS Enterprise and rendered as an image.    | Displaying layers dynamically rendered by an ArcGIS Server service.    |
| ImageryLayer | Georeferenced imagery stored in ArcGIS Enterprise.    | Displaying satellite or other imagery data.   |