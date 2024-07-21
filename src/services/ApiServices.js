import axios from 'axios';

const API_URL = 'http://localhost:3001/api';

export const fetchDashboardData = async () => {
  try {
    const response = await axios.get(`${API_URL}/dashboard`, {
      withCredentials: true // This allows cookies to be sent with the request
    });
    return response;
  } catch (error) {
    console.error('Error fetching dashboard data:', error);
    throw error;
  }
};

export const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { username, password }, { withCredentials: true });
    return response;
  } catch (error) {
    throw error;
  }
};

export const logout = async () => {
  try {
    const response = await axios.post(`${API_URL}/logout`, {}, { withCredentials: true });
    return response;
  } catch (error) {
    throw error;
  }
};
