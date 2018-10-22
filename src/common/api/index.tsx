import { actualStatusMock } from './mockData';

const API_URL = 'https://cors-anywhere.herokuapp.com/https://reddit.com';
export default API_URL;

const fetchActualStatus = (): Promise<any[]> => {
  return Promise.resolve(actualStatusMock);
};

export const api = {
  fetchActualStatus,
};