import axios from 'axios';

export const apiServer = axios.create({ baseURL: 'http://localhost:4000' })
export const gisServer = axios.create({ baseURL: 'https://gis.mhfd.org/server/rest/services' })