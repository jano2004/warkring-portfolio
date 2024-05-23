import React, { useState } from "react";
import './MainMobile.css';
import Header from '../../Header/Header';
import MainBody from '../MainBody/MainBody';
import Menu from '../../Header/Menu/Menu';
import MainServices from '../MainServices/MainServices';
import MainFeatures from '../MainFeatures/MainFeatures';
import Footer from '../../Footer/Footer';
import { colors } from "../../../../Services/ThemeService/Colors";
import useDarkMode from "../../../../Services/ThemeService/ThemeService";

function MobileMain() {
    const [isDarkMode] = useDarkMode();
    const [menu, setMenu] = useState(false);

    const mobileMenuStyle = {
        transition: 'transform 0.2s ease-in-out',
        width: '100%',
        transform: menu ? 'translateX(0)' : 'translateX(-100%)', // Dynamically set transform
    };

    const handleMenuMobileClick = () => {
        setMenu(!menu);
    }

    const styles = {
        mobileBody: {
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: colors.mainBackgroundColor(isDarkMode),
            justifyContent: 'center',
            alignItems: 'center',
            overflowX: 'hidden'
        }
    };

    const scrollToBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth'
        });
    }

    return (
        <div style={styles.mobileBody}>
            <Header handleMenuMobileClick={handleMenuMobileClick}/>
            <div className={`mobileMenu ${menu ? 'active' : ''}`} style={mobileMenuStyle}>
                {menu && <Menu currentSelected={'home'} />}
            </div>
            <MainBody scrollToBottom={scrollToBottom}/>
            <MainServices/>
            <MainFeatures/>
            <div style={{height: '30px'}}/>
            <Footer/>
        </div>
    );
}

export default MobileMain;
