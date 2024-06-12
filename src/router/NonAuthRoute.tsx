import React, { FC } from 'react';
import { Navigate, useNavigate } from "react-router-dom";
import { RouteProps } from '../types/router.types';
import useToken from '../hooks/useToken';
import { FirstConnectContainer } from '../containers/FirstConnectContainer';


const REDIRECT_PATH = "/"

const NonAuthRoute: FC<RouteProps> = ({ Component }) => {
    const token = useToken()
    return (
        <FirstConnectContainer>
            {
                !token ? <Component /> : <Navigate to={REDIRECT_PATH} />
            }
        </FirstConnectContainer>
    )
};

export default NonAuthRoute;