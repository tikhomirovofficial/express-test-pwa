import React from 'react';
import AppRoutes from "./router/AppRoutes";
import { MobileContainer } from './containers/MobileContainer';
import { Modal } from './components/Modal';

function App() {
    return (
        <>
            <MobileContainer>
                <div className="App p-rel m-100v pageScrollable">
                    <AppRoutes />
                </div>
            </MobileContainer>
            <Modal />
        </>
    );
}

export default App;
