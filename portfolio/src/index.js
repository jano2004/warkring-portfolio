import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Block from './Blocks/Block';
import reportWebVitals from './reportWebVitals';
import {blockData} from "./Blocks/BlockData";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      {blockData.map((item, index) => (
        <Block header={blockData[index][0]} text={blockData[index][1]} image={blockData[index][2]} alignment={blockData[index][3]}/>
      ))}
  </React.StrictMode>
);

reportWebVitals();
