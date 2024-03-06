import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Block from './Blocks/Block';
import Header from './Header/Header';
import Services from './Services/Services';
import reportWebVitals from './reportWebVitals';
import {blockData} from "./Blocks/BlockData";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Header />
      <Services />
  </React.StrictMode>
);

reportWebVitals();
