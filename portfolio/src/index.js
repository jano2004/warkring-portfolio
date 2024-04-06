import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import MobileMain from "./View/Mobile/Main/Main";
import Service from "./View/Mobile/Services/Service";

const App = () => {
    const [view, setView] = useState('Main');

    const handleMoreClick = () => {
        setView('Service');
        window.scrollTo(0, 0);
    };

    const handleHomeClick = () => {
        console.log('home')
        setView('Main');
        window.scrollTo(0, 0);
    }

    return (
        <>
            {view === "Main" ? <MobileMain onMoreClick={handleMoreClick} /> : <Service handleHomeClick={handleHomeClick}/>}
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
