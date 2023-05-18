
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserData } from './userAPI';

export const getUsers = createAsyncThunk('users/getUsers', async () => {
    const response = await getUserData();
    return response;
});
