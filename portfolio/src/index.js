import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import MobileMain from "./View/Mobile/Main/Main";
import Service from "./View/Mobile/Services/Service";
import Login from "./View/Mobile/LoginRegister/Login/Login";

const App = () => {
    const [view, setView] = useState('Main');

    const handleMoreClick = () => {
        console.log('service-view loaded')
        setView('Service');
        window.scrollTo(0, 0);
    };

    const handleHomeClick = () => {
        console.log('main-view loaded')
        setView('Main');
        window.scrollTo(0, 0);
    }

    const handleLoginClick = () => {
        console.log('login-view loaded')
        setView('Login')
        window.scrollTo(0, 0)
    }

    return (
        <>
            {view === 'Main' ? <MobileMain handleMoreClick={handleMoreClick} handleLoginClick={handleLoginClick}/>
                : view === 'Service' ? <Service handleHomeClick={handleHomeClick} handleLoginClick={handleLoginClick}/>
                    : view === 'Login' ? <Login handleHomeClick={handleHomeClick}/>
                        : null}
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

reportWebVitals();
