import React, { useState, useEffect } from 'react';
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

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        // Handler, der bei Größenänderung des Fensters aufgerufen wird
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        // Event-Listener für das 'resize'-Ereignis hinzufügen
        window.addEventListener('resize', handleResize);

        // Aufräumfunktion, die den Event-Listener entfernt
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            {window.innerWidth <= 400 ?
                view === 'Main' ? <MobileMain handleMoreClick={handleMoreClick} handleLoginClick={handleLoginClick}/>
                : view === 'Service' ? <Service handleHomeClick={handleHomeClick} handleLoginClick={handleLoginClick}/>
                    : view === 'Login' ? <Login handleHomeClick={handleHomeClick}/>
                        : null
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
