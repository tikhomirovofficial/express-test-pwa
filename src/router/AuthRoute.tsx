import React, { FC, useEffect } from 'react';
import { Navigate } from "react-router-dom";
import { RouteProps } from '../types/router.types';
import { FirstConnectContainer } from '../containers/FirstConnectContainer';
import useToken from '../hooks/useToken';
import { useAppSelector } from '../app/hooks';

const REDIRECT_PATH = "/login/phone"

const AuthRoute: FC<RouteProps> = ({ Component }) => {
    const { token } = useAppSelector(state => state.login)
    return <FirstConnectContainer>
        {
            token.valid ? <Component /> : <Navigate to={REDIRECT_PATH} />
        }
    </FirstConnectContainer>
};

export default AuthRoute;