import { createAsyncThunk } from "@reduxjs/toolkit";
import { PersonalFormState } from "./personalFormSlice";
import { submitPersonalForm } from "./personalFormAPI";

export const submitForm = createAsyncThunk(
    'personalform/submitForm',
    async ({ id, data }: { id: string, data: PersonalFormState['values'] }) => {
        const response = await submitPersonalForm(id, data);
        return response;

    }
);
