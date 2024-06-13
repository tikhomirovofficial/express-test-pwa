import React, { useEffect, useState } from 'react';
import AppRoutes from "./router/AppRoutes";
import { MobileContainer } from './containers/MobileContainer';
import { Modal } from './components/Modal';
import { OrderModal } from './components/Modals/OrderModal';
import { Modals } from './components/Modals';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { SkeletonTheme } from 'react-loading-skeleton';
import { storeAlreadyBeen } from './utils/storeAlreadyBeen';
import useToken from './hooks/useToken';
import { setValidToken } from './features/login/loginSlice';
import { LoadingPage } from './pages/LoadingPage';
import { getHasProfile } from './features/profile/profileSlice';
import { useLocation } from 'react-router-dom';
import { ConditionContainer } from './containers/ConditionContainer';
import { BottomNav } from './components/BottomNav';
const validPaths = ['/', '/help', '/profile'];

function App() {
    const dispatch = useAppDispatch();
    const token = useToken()
    const modals = useAppSelector(state => state.modals)
    const location = useLocation()

    const { alreadyBeen, pin, accepted } = useAppSelector(state => state.access)
    const { has_profile } = useAppSelector(state => state.profile)
    const { valid } = useAppSelector(state => state.login.token)
    const [someOpened, setSomeOpened] = useState(false)

    useEffect(() => {
        console.log(validPaths.findIndex(item => item === location.pathname));


    }, [location.pathname])

    useEffect(() => {
        //dispatch(setValidToken(token as boolean))
        dispatch(setValidToken(true))
    }, [token])

    useEffect(() => {
        if (valid) {
            dispatch(getHasProfile(() => { }))
        }
    }, [valid])

    useEffect(() => {
        const modalsKeys = Object.keys(modals)
        const some = modalsKeys.some(key => {
            const typedKey = key as keyof typeof modals
            return modals[typedKey].opened
        })
        setSomeOpened(some)
    }, [modals])

    useEffect(() => {
        storeAlreadyBeen(alreadyBeen.valid)
    }, [alreadyBeen.valid])

    // if (has_profile === null) {
    //     return <LoadingPage />
    // }

    return (
        <SkeletonTheme baseColor="lightgray" highlightColor="#fff">
            <MobileContainer>
                <div className={`App p-rel m-100v pageScrollable ${!someOpened ? "scrollEnabled" : "pageZoomOut scrollDisabled"}`}>
                    <AppRoutes />
                </div>
            </MobileContainer>
            <Modals />
            {
                !validPaths.includes(location.pathname) ? null : <BottomNav current={validPaths.findIndex(item => item === location.pathname) + 1} />
            }
        </SkeletonTheme>
    );
}

export default App;
