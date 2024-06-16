import { deleteTokens } from "../utils/storeTokens"

export const useLogout = () => {
    return () => {
        deleteTokens()
        window.location.href = "/"
    }
}