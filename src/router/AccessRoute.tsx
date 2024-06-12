import React, { FC } from 'react';
import { Navigate } from "react-router-dom";
import { RouteProps } from '../types/router.types';
import AuthRoute from './AuthRoute';

const REDIRECT_PATH = "/login/pin/login"

const AccessRoute: FC<RouteProps> = ({ Component }) => {
    const isAccepted = false
    return (
        isAccepted ?
            <AuthRoute Component={Component} />
            : <Navigate to={REDIRECT_PATH} />
    );
};

export default AccessRoute;