import { configureStore } from '@reduxjs/toolkit';
import { usersApiSlice } from '../features/users/usersApiSlice';

import usersReducer from '../features/users/usersSlice';

export const store = configureStore({
    reducer: {
        users: usersReducer,
        [usersApiSlice.reducerPath]: usersApiSlice.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(usersApiSlice.middleware)
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;