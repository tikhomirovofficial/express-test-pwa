import React from 'react';
import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import PublicRoute from "./PublicRoute";
import AuthRoute from "./AuthRoute";
import NonAuthRoute from "./NonAuthRoute";
import { Orders } from '../pages/Orders';
import { WelcomePatients } from '../pages/Welcome/WelcomePatients';

const AppRoutes = ({ isAuth = false }) => {
    return (
        <Routes>
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
            {/* {
                routes.public.map(({path, Component}) => (
                    <Route
                        key={path}
                        path={path}
                        element={<PublicRoute Component={Component}/>}
                    />
                ))
            } */}
            {

            }
            <Route
                key={"/"}
                path={"/"}
                element={<PublicRoute Component={Orders} />}
            />
            
            <Route
                key={"/welcome"}
                path={"/welcome"}
                element={<PublicRoute Component={WelcomePatients} />}
            />

        </Routes>
    );
};

export default AppRoutes;