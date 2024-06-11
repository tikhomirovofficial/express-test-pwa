import React, { useEffect, useState } from 'react';
import AppRoutes from "./router/AppRoutes";
import { MobileContainer } from './containers/MobileContainer';
import { Modal } from './components/Modal';
import { OrderModal } from './components/Modals/OrderModal';
import { Modals } from './components/Modals';
import { useAppSelector } from './app/hooks';
import { SkeletonTheme } from 'react-loading-skeleton';

function App() {
    const modals = useAppSelector(state => state.modals)
    const [someOpened, setSomeOpened] = useState(false)

    useEffect(() => {
        const modalsKeys = Object.keys(modals)
        const some = modalsKeys.some(key => {
            const typedKey = key as keyof typeof modals
            return modals[typedKey].opened
        })
        setSomeOpened(some)
    }, [modals])

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
