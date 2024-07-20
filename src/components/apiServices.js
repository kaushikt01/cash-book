
import axios from 'axios';

const API_URL = 'http://localhost:3001/api';

export const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { username, password }, { withCredentials: true });
    return response;
  } catch (error) {
    throw error;
  }
};
