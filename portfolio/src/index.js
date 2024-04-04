import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import DesktopMain from "./View/Desktop/Main";
import MobileMain from "./View/Mobile/Main";

const App = () => {
  return (
      <>
          {/*<DesktopMain/>*/}
          <MobileMain />
      </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);

reportWebVitals();
