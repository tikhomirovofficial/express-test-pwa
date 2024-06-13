import { configureStore } from '@reduxjs/toolkit'
import { profileReducer } from "../features/profile/profileSlice";
import { modalsReducer } from '../features/modals/modalsSlice';
import { accessReducer } from '../features/access/accessSlice';
import { loginReducer } from '../features/login/loginSlice';
import { ordersReducer } from '../features/orders/ordersSlice';
import { currentDataReducer } from '../features/current-data/currentData';
export const store = configureStore({
    reducer: {
        profile: profileReducer,
        modals: modalsReducer,
        access: accessReducer,
        login: loginReducer,
        orders: ordersReducer,
        currentData: currentDataReducer

    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch