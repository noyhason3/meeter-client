import apiClient from '../../../services/apiClient';
import { PersonalFormState } from './personalFormSlice';

export const submitPersonalForm = async (id: string, data: PersonalFormState['values']): Promise<any> => {
    try {
        const response = await apiClient.put(`/user/${id}`, data);
        return response.data;
    } catch (error) {
        throw new Error('Failed to update user data');
    }
};
