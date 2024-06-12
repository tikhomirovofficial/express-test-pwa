import { useEffect } from "react";
import { deleteTokens, getTokens } from "../utils/storeTokens";
import { decodeToken, isExpired } from "react-jwt";
import { useAppDispatch } from "../app/hooks";
import { setValidToken } from "../features/login/loginSlice";


const useToken = () => {
    const dispatch = useAppDispatch()
    const tokens = getTokens();
    const refresh: string | undefined = tokens?.refresh;
    const isExpiredToken = isExpired(refresh as string)

    if (isExpiredToken) {
        deleteTokens()
        return;
    }

    const decoded = decodeToken(refresh || "") as { user_id?: string } || {};
    const hasUserId = "user_id" in decoded;
    const isRefreshValid = !!(refresh && hasUserId);
    return isRefreshValid
};

export default useToken;