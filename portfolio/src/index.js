import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import MobileMain from "./View/Mobile/Main/Main";
import Service from "./View/Mobile/Services/Service";
import Login from "./View/Mobile/LoginRegister/Login/Login";
import BlockerVideo from './BlockerVideo.mp4';

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
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

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
                            : <video src={BlockerVideo} autoPlay muted loop style={{height: 'auto', width: '100%'}}>Ihr Browser untersützt Video-Vormate nicht: Aufgrund eines Relaunches ist Warkring.org derzeit nur Mobil auffindbar!</video>}
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
