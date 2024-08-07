import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import MobileMain from './View/Mobile/Main/Main/Main';
import ContactMain from './View/Mobile/Contact/Main/Main';
import ImpressumMain from './View/Mobile/Impressum/Main';
import AboutMain from './View/Mobile/AboutUs/Main';
import FeaturesMain from './View/Mobile/Features/Main/Main';
import FeaturesDesktop from './View/Desktop/Features/Main/Main';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import ErrorHandler from './View/Mobile/ErrorHandler/ErrorHandler';
import DesktopCotanct from "./View/Desktop/Contact/ContactMain";
import DesktopMain from './View/Desktop/Main/Main/Main';

const App = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <Router>
            <Routes>
                {windowWidth <= 500 && (
                    <>
                        <Route path={'/features'} element={<FeaturesMain />}/>
                        <Route path={'/über uns'} element={<AboutMain />}/>
                        <Route path={'/kontakt'} element={<ContactMain />}/>
                        <Route path={'/impressum'} element={<ImpressumMain /> }/>
                        <Route path={'/'} element={<MobileMain />}/>
                    </>
                )}
                {windowWidth >= 501 && (
                    <>
                        <Route path={'/'} element={<DesktopMain />}/>
                        <Route path={'/kontakt'} element={<DesktopCotanct />}/>
                        <Route path={'features'} element={<FeaturesDesktop />}/>
                    </>
                )}
            </Routes>
        </Router>
    );
};

// Updated mounting code using createRoot
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

reportWebVitals();
