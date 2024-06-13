import React, { FC } from 'react';
import { Navigate } from "react-router-dom";
import { RouteProps } from '../types/router.types';
import AuthRoute from './AuthRoute';
import { useAppSelector } from '../app/hooks';
import AccessRoute from './AccessRoute';

const REDIRECT_PATH = "/register/profile"

const HasProfileRoute: FC<RouteProps> = ({ Component }) => {
    const { has_profile } = useAppSelector(state => state.profile)
    return (
        has_profile ?
            <AccessRoute Component={Component} />
            : <Navigate to={REDIRECT_PATH} />
    );
};

export default HasProfileRoute;