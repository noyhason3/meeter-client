import { combineReducers } from 'redux';
import userReducer from './features/users/userSlice';

const rootReducer = combineReducers({
    users: userReducer,
    // Add other reducers here
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;