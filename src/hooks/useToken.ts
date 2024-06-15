import { useEffect } from "react";
import { deleteTokens, getTokens } from "../utils/storeTokens";
import { decodeToken, isExpired } from "react-jwt";
import { useAppDispatch } from "../app/hooks";
import { setValidToken } from "../features/login/loginSlice";
import { deleteCookie } from "../utils/CookieUtil";


const useToken = () => {
    const tokens = getTokens();
    if (!tokens) {
        deleteCookie("accepted")
        return false
    }
    const isExpiredToken = isExpired(tokens.refresh)

    if (isExpiredToken) {
        deleteTokens()
        deleteCookie("accepted")
        return false;
    }

    const decoded = decodeToken(tokens.refresh || "") as { user_id?: string } || {};
    const hasUserId = "user_id" in decoded;
    const isRefreshValid = !!(tokens.refresh && hasUserId);
    return isRefreshValid
};

export default useToken;