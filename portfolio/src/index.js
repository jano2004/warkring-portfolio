import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import MobileMain from "./View/Mobile/Main/Main";
import Service from "./View/Mobile/Services/Service";
import Login from "./View/Mobile/LoginRegister/Login/Login";
import MobileRegister from './View/Mobile/LoginRegister/Register/Register';
import Contact from "./View/Mobile/Contact/Contact";
import DesktopMain from "./View/Desktop/Main";
import offline from './View/Desktop/Images/offline.png'

const App = () => {
    const [view, setView] = useState('Main');

    const handleMoreClick = () => {
        console.log('service-view loaded');
        setView('Service');
        window.scrollTo(0, 0);
    };

    const handleHomeClick = () => {
        console.log('main-view loaded');
        setView('Main');
        window.scrollTo(0, 0);
    }

    const handleLoginClick = () => {
        console.log('login-view loaded');
        setView('Login');
        window.scrollTo(0, 0);
    }

    const handleRegisterClick = () => {
        console.log('register-view loaded');
        setView('Register');
        window.scrollTo(0, 0);
    }

    const handelContactClick = () => {
        console.log('contact-view loaded');
        setView('Contact');
        window.scrollTo(0, 0);
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
            {windowWidth <= 500 ?
                view === 'Main' ? <MobileMain handleMoreClick={handleMoreClick} handleLoginClick={handleLoginClick} handelContactClick={handelContactClick}/>
                : view === 'Service' ? <Service handleHomeClick={handleHomeClick} handleLoginClick={handleLoginClick} handelContactClick={handelContactClick} handleMoreClick={handleMoreClick}/>
                    : view === 'Login' ? <Login handleHomeClick={handleHomeClick} handleRegisterClick={handleRegisterClick}/>
                        :view === 'Register' ? <MobileRegister handleHomeClick={handleHomeClick} handleLoginClick={handleLoginClick}/>
                            :view === 'Contact' ? <Contact handleHomeClick={handleHomeClick} handleLoginClick={handleLoginClick} handelContactClick={handelContactClick} handleMoreClick={handleMoreClick} />
                        : null
                            : <img src={offline} alt="" width={'100%'}/>}
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
