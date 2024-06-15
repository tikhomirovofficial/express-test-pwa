import React, { FC, useEffect } from 'react';
import { Navigate } from "react-router-dom";
import { RouteProps } from '../types/router.types';
import { FirstConnectContainer } from '../containers/FirstConnectContainer';
import useToken from '../hooks/useToken';
import { useAppSelector } from '../app/hooks';
import { LoadingPage } from '../pages/LoadingPage';

const REDIRECT_PATH = "/login/phone"

const AuthRoute: FC<RouteProps> = ({ Component }) => {
    const { token } = useAppSelector(state => state.login)
    if (token.valid === null) {
        return <LoadingPage />
    }
    return <FirstConnectContainer>
        {
            token.valid ? <Component /> : <Navigate to={REDIRECT_PATH} />
        }
    </FirstConnectContainer>
};

export default AuthRoute;