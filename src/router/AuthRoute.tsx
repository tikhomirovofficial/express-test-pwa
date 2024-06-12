import React, { FC } from 'react';
import { Navigate } from "react-router-dom";
import { RouteProps } from '../types/router.types';

const REDIRECT_PATH = "/login/phone"

const AuthRoute: FC<RouteProps> = ({ Component }) => {
    const isAuth = !false
    return (
        isAuth ? <Component /> : <Navigate to={REDIRECT_PATH} />
    );
};

export default AuthRoute;