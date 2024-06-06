import { configureStore } from '@reduxjs/toolkit'
import {profileReducer} from "../features/profile/profileSlice";
import { modalsReducer } from '../features/modals/modalsSlice';
export const store = configureStore({
    reducer: {
        profile: profileReducer,
        modals: modalsReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch