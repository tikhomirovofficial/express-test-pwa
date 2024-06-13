import { getTokens, storeTokens } from "./storeTokens";
import { UserApi } from "../http/api/user.api";
import { AxiosError } from "axios";

export async function handleTokenRefreshedRequest(cb: any | null = null, apiFunction: Function, ...args: any[]) {
    const isRefreshValid = getTokens().refresh

    if (isRefreshValid) {
        const tokens = getTokens();
        const refresh = tokens.refresh
        try {
            const res = await apiFunction(...args);
            return res
        } catch (error: any) {
            console.log(error.response);
            if (error.response.data.code === "token_not_valid") {
                try {
                    console.log("access expired");
                    const refreshToken = refresh;
                    const tokensRes = await UserApi.RefreshToken({ refresh: refreshToken !== undefined ? refreshToken : "" });
                    storeTokens({
                        access: tokensRes.data.access,
                        refresh: refreshToken
                    });
                    console.log("refreshed");
                    return await apiFunction(...args);
                } catch (error) {
                    if (cb) {
                        cb()
                    }
                    return await "refresh_not_valid"
                }

            } else {
                throw error;
            }
        }
    } else {
        throw new Error("No refresh_token token available.");
    }
}

