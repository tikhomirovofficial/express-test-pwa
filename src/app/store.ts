import { configureStore } from '@reduxjs/toolkit'
import { profileReducer } from "../features/profile/profileSlice";
import { modalsReducer } from '../features/modals/modalsSlice';
import { accessReducer } from '../features/access/accessSlice';
import { loginReducer } from '../features/login/loginSlice';
import { ordersReducer } from '../features/orders/ordersSlice';
import { currentDataReducer } from '../features/current-data/currentData';
import { patientsReducer } from '../features/patients/patientsSlice';
import { bonusesReducer } from '../features/bonuses/bonusesSlice';
import { invitingReducer } from '../features/inviting/invitingSlice';

export const store = configureStore({
    reducer: {
        profile: profileReducer,
        modals: modalsReducer,
        access: accessReducer,
        login: loginReducer,
        orders: ordersReducer,
        currentData: currentDataReducer,
        patients: patientsReducer,
        bonuses: bonusesReducer,
        inviting: invitingReducer

    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch