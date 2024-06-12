import { JWT } from "../types/common.types"
import { setCookie } from "./CookieUtil"

export const setCookieTokens = (tokens: JWT): void => {
    setCookie("tokens", tokens, 30)
}