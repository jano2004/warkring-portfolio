import React from 'react';
import './DesktopHeader.css';
import logo from '../../Desktop/Images/DesktopLogoIcon.png';

function Header({ onContactClick }) {
    return (
        <div className="DesktopHeader">
            <div className="Header_Logo_Text">
                <img src={logo} alt="Logo" className="Header_Logo"/>
            </div>
            <div className="Header_Search_Menu_Login_Register">
                <button className="Header_Menu_Button">Menu</button>
                <button className="Header_Login_Button">Log in</button>
                <button className="Header_Register_Button">Registrieren</button>
            </div>
        </div>
    );
}

export default Header;