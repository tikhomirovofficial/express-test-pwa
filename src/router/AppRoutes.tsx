import React from 'react';
import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import PublicRoute from "./PublicRoute";
import AuthRoute from "./AuthRoute";
import NonAuthRoute from "./NonAuthRoute";
import { Orders } from '../pages/Orders';
import { WelcomePatients } from '../pages/Welcome/WelcomePatients';
import AccessRoute from './AccessRoute';

const AppRoutes = ({ isAuth = false }) => {
    return (
        <Routes>
            {
                routes.access.map(({ path, Component }) => (
                    <Route
                        key={path}
                        path={path}
                        element={<AccessRoute Component={Component} />}
                    />
                ))
            }
            {
                routes.auth.map(({ path, Component }) => (
                    <Route
                        key={path}
                        path={path}
                        element={<AuthRoute Component={Component} />}
                    />
                ))
            }
            {
                routes.non_auth.map(({ path, Component }) => (
                    <Route
                        key={path}
                        path={path}
                        element={<NonAuthRoute Component={Component} />}
                    />
                ))
            }
            {
                routes.public.map(({ path, Component }) => (
                    <Route
                        key={path}
                        path={path}
                        element={<PublicRoute Component={Component} />}
                    />
                ))
            }



        </Routes>
    );
};

export default AppRoutes;