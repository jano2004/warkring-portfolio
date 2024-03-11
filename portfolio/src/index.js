import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Block from './Blocks/Block';
import Header from './Header/Header';
import MainBody from './MainBody/MainBody';
import FeatureSlides from './FeaturesSlides/FeatureSlides';
import ServicesMainSite from "./ServiceMainSite/ServicesMainSite";
import FeatureDesign from "./FeaturesDesigns/FeatureDesign";
import Services from './Services/Services';
import ContactPage from './Contact/ContactPage';
import reportWebVitals from './reportWebVitals';
import {blockData} from "./Blocks/BlockData";

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
