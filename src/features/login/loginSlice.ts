import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { UserApi } from "../../http/api/user.api";
import { AuthReq, AuthRes, AuthAcceptReq, AuthAcceptRes } from "../../types/api/user.api.types";
import { deleteTokens, storeTokens } from "../../utils/storeTokens";

type LoginSliceType = {
    access_token: string
    token: {
        valid: boolean,
        checking: boolean
    },
    auth: {
        loading: boolean,
        success: {
            phone: boolean | null
            code: boolean | null
        },
        code_options: {
            is_freezed: boolean
            freezed_sec: number
        },
        form: {
            maskedPhone: string
            phone: string
            password: string
        },
        errors: {
            phone: string
            code: string
        }
    }
}

const initialState: LoginSliceType = {
    access_token: "",
    token: {
        checking: true,
        valid: !true
    },
    auth: {
        loading: false,
        success: {
            phone: null,
            code: null
        },
        code_options: {
            is_freezed: false,
            freezed_sec: 0
        },
        form: {
            maskedPhone: "+7",
            phone: "",
            password: ""
        },
        errors: {
            phone: "",
            code: ""
        }
    }
}

export const sendAuthPhone = createAsyncThunk(
    'login/phone',
    async (req: AuthReq, { dispatch }) => {
        // const res: AxiosResponse<AuthRes> = await UserApi.LoginPhone(req)
        // if (!res.status || !res.data.status) {
        //     throw new Error("Ошибка сервера!")
        // }
        // return res.data
        return new Promise<AuthRes>((res, rej) => {
            setTimeout(() => {
                res({
                    status: true
                })
            }, 1000)
        })
    }
)
export const sendAuthCode = createAsyncThunk(
    'login/code',
    async (req: AuthAcceptReq, { dispatch }) => {
        // const res: AxiosResponse<AuthAcceptRes> = await UserApi.LoginCode(req)
        // if (!res.data) {
        //     throw new Error("Ошибка сервера!")
        // }
        // if (res.status === 401) {
        //     throw new Error("Неверный код!")
        // }
        // storeTokens({ refresh: res.data.refresh, access: res.data.access })
        // return res.data
        return new Promise<AuthAcceptRes>((res, rej) => {
            setTimeout(() => {
                res({
                    access: "dsadasdsadsa",
                    refresh: "dsadsa"
                })
            }, 1000)
        })
    }
)

export const LoginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        handleLoginForm: (state, action: PayloadAction<{ key: keyof typeof initialState.auth.form, val: string }>) => {
            if (state.auth.errors.code) {
                state.auth.errors.code = ""
            }
            if (state.auth.errors.phone) {
                state.auth.errors.phone = ""
            }
            state.auth.form[action.payload.key] = action.payload.val
        },
        setCodeIsFreezed: (state, action: PayloadAction<boolean>) => {
            state.auth.code_options.is_freezed = action.payload
        },
        setCodeFreezedSecs: (state, action: PayloadAction<number>) => {
            state.auth.code_options.freezed_sec = action.payload
        },
        resetLoginForm: (state) => {
            state.auth = initialState.auth
        },
        setValidToken: (state, action: PayloadAction<boolean>) => {
            state.token.valid = action.payload
        },
        resetLoginCodeStatus: (state) => {
            state.auth.success.code = null
        },
        resetLoginPhoneStatus: (state) => {
            state.auth.success.phone = null
        },


    },
    extraReducers: (builder) => {
        //SEND PHONE IN LOGIN
        builder.addCase(sendAuthPhone.pending, (state, action) => {
            state.auth.loading = true
            state.auth.success.phone = null
            state.auth.errors.phone = ""
        })
        builder.addCase(sendAuthPhone.fulfilled, (state, action) => {
            state.auth.loading = false
            state.auth.success.phone = action.payload.status
        })
        builder.addCase(sendAuthPhone.rejected, (state, action) => {
            state.auth.loading = false
            state.auth.success.phone = false

            console.log(action.error.code);

            state.auth.errors.phone = String(action.error.message)
        })
        //SEND CODE IN LOGIN
        builder.addCase(sendAuthCode.pending, (state, action) => {
            state.auth.loading = true
            state.auth.success.code = null
            state.auth.errors.code = ""
        })
        //SAVE TOKENS
        builder.addCase(sendAuthCode.fulfilled, (state, action) => {
            state.auth.loading = false
            state.auth.success.code = true
            state.token.valid = true
            state.auth.form = initialState.auth.form

        })
        builder.addCase(sendAuthCode.rejected, (state, action) => {
            const isBadCode = action.error.code === "ERR_BAD_REQUEST"
            state.auth.loading = false
            state.auth.success.code = false
            state.auth.errors.code = String(isBadCode ? "Неверный код" : action.error.message)
        })
        // //CHECK TOKEN IS VALID
        // builder.addCase(checkToken.pending, (state, action) => {
        //     state.token.checking = true
        // })
        // builder.addCase(checkToken.fulfilled, (state, action) => {
        //     state.token.checking = false
        //     state.token.valid = action.payload

        // })
        // builder.addCase(checkToken.rejected, (state, action) => {
        //     state.token.valid = false
        //     state.token.checking = false
        // })
        //LOGOUT
    },
})

export const {
    handleLoginForm,
    resetLoginForm,
    resetLoginCodeStatus,
    setValidToken,
    resetLoginPhoneStatus,
    setCodeFreezedSecs,
    setCodeIsFreezed
} = LoginSlice.actions


export const loginReducer = LoginSlice.reducer