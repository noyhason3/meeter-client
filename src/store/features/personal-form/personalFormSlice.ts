import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { submitForm } from './personalFormActions';


export type PersonalFormState = {
    values: {
        firstName: string;
        lastName: string;
    };
    isLoading: boolean;
    userActiveId: string;
}

const initialState: PersonalFormState = {
    values: {
        firstName: '',
        lastName: ''
    },
    isLoading: false,
    userActiveId: '64650713c27448f04d7efc47'
};

const personalFormSlice = createSlice({
    name: 'personalFormSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(submitForm.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(submitForm.fulfilled, (state, action: PayloadAction<PersonalFormState['values']>) => {
                state.values = action.payload;
                state.isLoading = false;
            })
            .addCase(submitForm.rejected, (state) => {
                state.isLoading = false;
                // Handle rejection or error state if needed
            });
    },
})

export default personalFormSlice.reducer;
