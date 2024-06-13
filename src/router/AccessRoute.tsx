import React, { FC } from 'react';
import { Navigate } from "react-router-dom";
import { RouteProps } from '../types/router.types';
import AuthRoute from './AuthRoute';
import { useAppSelector } from '../app/hooks';

const REDIRECT_PATH = "/login/pin/login"

const AccessRoute: FC<RouteProps> = ({ Component }) => {
    const { valid } = useAppSelector(state => state.access.accepted)
    return (
        valid?
            <AuthRoute Component={Component} />
            : <Navigate to={REDIRECT_PATH} />
    );
};

export default AccessRoute;