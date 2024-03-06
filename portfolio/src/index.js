import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Block from './Blocks/Block';
import Header from './Header/Header';
import reportWebVitals from './reportWebVitals';
import {blockData} from "./Blocks/BlockData";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
      <div className="main_blocks_container">
          {blockData.map((item, index) => (
              <Block header={blockData[index][0]} text={blockData[index][1]} image={blockData[index][2]} alignment={blockData[index][3]}/>
          ))}
      </div>
  </React.StrictMode>
);

reportWebVitals();
