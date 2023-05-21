import axios from 'axios';
import apiClient from '../../../services/apiClient';

export const getUserData = async (): Promise<any> => {
  try {
    const response = await apiClient.get('/user');
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch user data');
  }
};
