import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Header/Header';
import MainBody from './MainBody/MainBody';
import FeatureSlides from './FeaturesSlides/FeatureSlides';
import reportWebVitals from './reportWebVitals';
import ServicesMainSite from "./ServiceMainSite/ServicesMainSite";

const App = () => {
  const [showContactPage, setShowContactPage] = useState(false);

  const toggleContactPage = () => {
      setShowContactPage(!showContactPage);
  }

  return (
      <>
          <Header />
          <MainBody />
          <FeatureSlides />
          <ServicesMainSite />
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
