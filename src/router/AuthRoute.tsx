import React, { FC, useEffect } from 'react';
import { Navigate } from "react-router-dom";
import { RouteProps } from '../types/router.types';
import { FirstConnectContainer } from '../containers/FirstConnectContainer';
import useToken from '../hooks/useToken';

const REDIRECT_PATH = "/login/phone"

const AuthRoute: FC<RouteProps> = ({ Component }) => {
    const token = useToken()
    useEffect(() => {
        console.log(token);

    }, [])
    return <FirstConnectContainer>
        {
            token ? <Component /> : <Navigate to={REDIRECT_PATH} />
        }
    </FirstConnectContainer>
};

export default AuthRoute;