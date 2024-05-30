import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ProfileState {
    data: any

}

const initialState: ProfileState = {
    data: {
        name: "Artem",
        age: 19
    }
}

export const ProfileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        setProfile: (state, action: PayloadAction<any>) => {
            state.data = action.payload
        }
    }
})

export const { setProfile } = ProfileSlice.actions
export const profileReducer = ProfileSlice.reducer