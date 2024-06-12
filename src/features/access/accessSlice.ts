import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getFromStorage } from "../../utils/LocalStorageExplorer";

type AcecssSliceType = {
    alreadyBeen: {
        valid: boolean
    },
    pin: {
        exists: boolean | null,
    },
    accepted: {
        error: string,
        valid: boolean | null
    },

}

const initialState: AcecssSliceType = {
    alreadyBeen: {
        valid: getFromStorage("already_been") || false
    },
    accepted: {
        error: "",
        valid: null,
    },
    pin: {
        exists: null
    },

}



export const accessSlice = createSlice({
    name: "access",
    initialState,
    reducers: {
        setAlreadyBeen: (state, action: PayloadAction<boolean>) => {
            state.alreadyBeen.valid = action.payload
        },
        resetAcceptedErr: (state) => {
            state.accepted.error = ""
        },
        resetAccess: state => {
            state.accepted.valid = null
        }
    }
})

export const {
    resetAcceptedErr,
    resetAccess,
    setAlreadyBeen
} = accessSlice.actions


export const accessReducer = accessSlice.reducer