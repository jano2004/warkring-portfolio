import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Block from './Blocks/Block';
import Header from './Header/Header';
import MainBody from './MainBody/MainBody';
import FeatureSlides from './FeaturesSlides/FeatureSlides';
import Services from './Services/Services';
import ContactPage from './contact/contactPage';
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
