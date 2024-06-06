import React, { useEffect, useState } from 'react';
import AppRoutes from "./router/AppRoutes";
import { MobileContainer } from './containers/MobileContainer';
import { Modal } from './components/Modal';
import { OrderModal } from './components/Modals/OrderModal';

function App() {
    const [opened, setOpened] = useState(false)
    return (
        <>
            <button>dsadas</button>
            <MobileContainer>
                <div className="App p-rel m-100v pageScrollable">
                    <AppRoutes />
                </div>
            </MobileContainer>
            <OrderModal opened={opened} />
        </>
    );
}

export default App;
