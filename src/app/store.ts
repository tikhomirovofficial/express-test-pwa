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
import { orderReducer } from '../features/order/orderSlice';
import { cartReducer } from '../features/cart/cartSlice';
import { categoriesReducer } from '../features/categories/categoriesSlice';
import { productsReducer } from '../features/products/productSlice';

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
        inviting: invitingReducer,
        order: orderReducer,
        cart: cartReducer,
        categories: categoriesReducer,
        products: productsReducer

    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch