import React, { FC } from 'react';
import { Navigate, useNavigate } from "react-router-dom";
import { RouteProps } from '../types/router.types';


const REDIRECT_PATH = "/"

const NonAuthRoute: FC<RouteProps> = ({ Component }) => {
    const navigate = useNavigate()
    const isAuth = !false
    return (
        isAuth ? <Navigate to={REDIRECT_PATH} /> : <Component />
    )
};

export default NonAuthRoute;