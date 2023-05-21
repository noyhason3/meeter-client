import { combineReducers } from 'redux';
import userReducer from './features/users/userSlice';
import personalFormReducer from './features/personal-form/personalFormSlice';

const rootReducer = combineReducers({
    users: userReducer,
    personalForm: personalFormReducer
    // Add other reducers here
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;