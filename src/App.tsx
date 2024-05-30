import React from 'react';
import AppRoutes from "./router/AppRoutes";
import { MobileContainer } from './containers/MobileContainer';

function App() {
    return (
        <MobileContainer>
            <div className="App">
                <AppRoutes />
            </div>
        </MobileContainer>

    );
}

export default App;
