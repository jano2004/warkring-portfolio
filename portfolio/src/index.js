import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
//import DesktopMain from "./View/Desktop/Main";
import MobileMain from "./View/Mobile/Main/Main/Main";
import ServiceMain from "./View/Mobile/Service/Main/Main";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleServiceClick = () => {

    }

    return (
        <Router>
            <Routes>
                {windowWidth <= 500 && (
                    <>
                        <Route path="/" element={<MobileMain props={handleServiceClick}/>} />
                        <Route path="/services" element={<ServiceMain />} />
                    </>
                )}
            </Routes>
        </Router>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

reportWebVitals();