import { JWT } from "../types/common.types"
import { setCookie, getCookie, deleteCookie } from "./CookieUtil"

;

const DAYS = 30
export const storeTokens = (tokens: JWT) => {
    setCookie("tokens", {
        access_token: tokens.access,
        refresh_token: tokens.refresh
    }, DAYS)
}

export const getTokens = (): JWT => {
   return getCookie("tokens") as JWT
}

export const deleteTokens = () => {
    deleteCookie("tokens")
}