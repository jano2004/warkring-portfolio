import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Header/Header';
import MainBody from './MainBody/MainBody';
import FeatureSlides from './Feature/FeaturesSlides/FeatureSlides';
import reportWebVitals from './reportWebVitals';
import ServicesMainSite from "./ServiceMainSite/ServicesMainSite";
import Services from "./Services/Services";

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
          <Services />
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
