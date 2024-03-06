import React from 'react';
import './Header.css';
//import logo from './logo1200.png'; 
import logo600 from './logo600.png';

function Header({ onContactClick }) {
    return (
        <div className="Header">
            <div className="Header_Container">
                <img src={logo600} alt="Logo" className='logo'/> 
                <div className='Header_Button_Container'>
                    <button className='home'>HOME</button>
                    <button className='leistung'>LEISTUNGEN</button>
                    <button className='feature'>FEATURES</button>
                    <button className='unserTeam'>UNSER TEAM</button>
                    <button className='kontakt' onClick={onContactClick}>KONTAKT</button>
                </div>
            </div>
        </div>
    );
}

export default Header;