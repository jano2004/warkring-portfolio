import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import DesktopMain from "./View/Desktop/Main";
import MobileMain from "./View/Mobile/Main/Main";
import MobileMenu from './View/Mobile/Main/Menu/Menu';

const App = () => {
    const [view, setView] = useState('MobileMain');
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleMenuMobileClick = () => {
        const newView = view === 'MobileMain' ? 'MobileMenuView' : 'MobileMain';
        setView(newView);
        window.scrollTo(0, 0);
    }

    return (
        <>
            {windowWidth <= 500 ?
                (view === 'MobileMain' ?
                    <MobileMain handleMenuMobileClick={handleMenuMobileClick}/>
                    : <MobileMenu handleMenuMobileClick={handleMenuMobileClick}/>)
                : <DesktopMain />}
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
