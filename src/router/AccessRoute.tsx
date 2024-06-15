import React, { FC } from 'react';
import { Navigate } from "react-router-dom";
import { RouteProps } from '../types/router.types';
import AuthRoute from './AuthRoute';
import { useAppSelector } from '../app/hooks';
import { getCookie } from '../utils/CookieUtil';
import { LoadingPage } from '../pages/LoadingPage';

const REDIRECT_PATH = "/login/pin/login"

const AccessRoute: FC<RouteProps> = ({ Component }) => {
    const { valid } = useAppSelector(state => state.access.accepted)
    if (valid === null) {
        return <AuthRoute Component={LoadingPage} />
    }
    return (
        valid ?
            <AuthRoute Component={Component} />
            : <Navigate to={REDIRECT_PATH} />
    );
};

export default AccessRoute;