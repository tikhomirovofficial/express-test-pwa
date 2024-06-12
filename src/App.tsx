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

function App() {
    const dispatch = useAppDispatch();
    const token = useToken()
    const modals = useAppSelector(state => state.modals)
    const { alreadyBeen } = useAppSelector(state => state.access)
    const [someOpened, setSomeOpened] = useState(false)

    useEffect(() => {
        //dispatch(setValidToken(token as boolean))
        dispatch(setValidToken(true))
    }, [token])

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



    return (
        <SkeletonTheme baseColor="lightgray" highlightColor="#fff">
            <MobileContainer>
                <div className={`App p-rel m-100v pageScrollable ${!someOpened ? "scrollEnabled" : "pageZoomOut scrollDisabled"}`}>
                    <AppRoutes />
                </div>
            </MobileContainer>
            <Modals />
        </SkeletonTheme>
    );
}

export default App;
