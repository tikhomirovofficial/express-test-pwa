import React, { FC } from 'react';
import { Navigate } from "react-router-dom";
import { RouteProps } from '../types/router.types';
import AuthRoute from './AuthRoute';
import { useAppSelector } from '../app/hooks';
import { getCookie } from '../utils/CookieUtil';
import { LoadingPage } from '../pages/LoadingPage';

const REDIRECT_PATH = "/"

const NonAccessRoute: FC<RouteProps> = ({ Component }) => {
    const { valid } = useAppSelector(state => state.access.accepted)
    if (valid === null) {
        return <AuthRoute Component={LoadingPage} />
    }
    return (
        valid === false ?
            <AuthRoute Component={Component} />
            : <Navigate to={REDIRECT_PATH} />
    );
};

export default NonAccessRoute;