import axios from 'axios'; 
import API_URL from '../../config/api';

export const getStatus = async() => {
  try {
    const response = await axios.get(`${API_URL}/r/videos.json`);
    return response.data.data.children;
  } catch (error) {
    return error;
  }
}