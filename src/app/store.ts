import { configureStore } from '@reduxjs/toolkit'
import { profileReducer } from "../features/profile/profileSlice";
import { modalsReducer } from '../features/modals/modalsSlice';
import { accessReducer } from '../features/access/accessSlice';
import { loginReducer } from '../features/login/loginSlice';
export const store = configureStore({
    reducer: {
        profile: profileReducer,
        modals: modalsReducer,
        access: accessReducer,
        login: loginReducer,

    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch