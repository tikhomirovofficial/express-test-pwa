import React, { FC } from 'react';
import { Navigate } from "react-router-dom";
import { RouteProps } from '../types/router.types';
import AuthRoute from './AuthRoute';
import { useAppSelector } from '../app/hooks';
import AccessRoute from './AccessRoute';
import { LoadingPage } from '../pages/LoadingPage';

const REDIRECT_PATH = "/register/profile"

const HasProfileRoute: FC<RouteProps> = ({ Component }) => {
    const { has_profile } = useAppSelector(state => state.profile)
    if (has_profile === null) {
        return <AccessRoute Component={LoadingPage} />
    }
    return (
        has_profile ?
            <AccessRoute Component={Component} />
            : <Navigate to={REDIRECT_PATH} />
    );
};

export default HasProfileRoute;