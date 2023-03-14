import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "./models";

interface usersState {
    user: IUser;
}

const initialState: usersState = {
    user: { name: "Noya" }
};


const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        changeName(state) {
            state.user.name = "Guy"
        },
        changeNameByInput(state, action: PayloadAction<string>) {
            state.user.name = action.payload;
        }
    }
})

export const { changeName, changeNameByInput } = usersSlice.actions;
export default usersSlice.reducer;