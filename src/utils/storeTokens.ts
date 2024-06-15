import { JWT } from "../types/common.types"
import { setCookie, getCookie, deleteCookie } from "./CookieUtil"

const DAYS = 30
export const storeTokens = (tokens: JWT) => {
    setCookie("ex_pwa_tokens", {
        access: tokens.access,
        refresh: tokens.refresh
    }, DAYS)
}

export const getTokens = (): JWT => {
    return getCookie("ex_pwa_tokens") as JWT
}

export const deleteTokens = () => {
    deleteCookie("ex_pwa_tokens")
}