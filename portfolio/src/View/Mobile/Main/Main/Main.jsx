import Header from '../../Header/Header';
import MainBody from '../MainBody/MainBody';
import Menu from '../../Header/Menu/Menu';
import MainServices from '../MainServices/MainServices';
import MainFeatures from '../MainFeatures/MainFeatures';
import React, { useState } from "react";
import './MainMobile.css';
import Footer from '../../Footer/Footer';
import {colors} from "../../../../Services/ThemeService/Colors";
import useDarkMode from "../../../../Services/ThemeService/ThemeService";

function MobileMain() {
    const [isDarkMode] = useDarkMode();

    const styles = {
        mobileBody: {
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: colors.mainBackgroundColor(isDarkMode),
            justifyContent: 'center',
            alignItems: 'center',
            overflowX: 'hidden'
        },
        betaText: {
            color: colors.mainTextColor(isDarkMode),
            fontFamily: '-apple-system',
            fontWeight: 20,
            textAlign: 'center',
            width: '80%'
        },
        beta: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        },
        mobileMenu: {
            width: '100%'
        }
    };

    const beta = 'beta';

    const [menu, setMenu] = useState(false);

    const handleMenuMobileClick = () => {
        setMenu(!menu);
    }

    const scrollToBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth'
        });
    }

    if (beta === 'beta') {
        return (
            <div style={styles.mobileBody} onClick={menu ? handleMenuMobileClick : null}>
                <Header handleMenuMobileClick={handleMenuMobileClick}/>
                <div className={'mobileMenu'}>
                    {menu && <Menu currentSelected={'home'}/>}
                </div>
                <MainBody scrollToBottom={scrollToBottom}/>
                <MainServices/>
                <MainFeatures/>
                <Beta styles={styles}/>
                <div style={{height: '30px'}}/>
                <Footer/>
            </div>
        );
    } else if (beta === 'nonbeta') {
        return (
            <div style={styles.mobileBody} onClick={menu ? handleMenuMobileClick : null}>
                <Header handleMenuMobileClick={handleMenuMobileClick}/>
                <div style={styles.mobileMenu}>
                    {menu && <Menu currentSelected={'home'}/>}
                </div>
                <MainBody/>
                <MainServices/>
                <MainFeatures/>
                <div style={{height: '30px'}}/>
                <Footer />
            </div>
        );
    }
}

export default MobileMain;

function Beta({styles}) {
    return (
        <div style={styles.beta}>
            <p style={styles.betaText}>
                Wir befinden uns derzeit noch im Aufbau.
                Schreibe uns eine E-Mail um der Erste zu sei,
                der die neue Website begrüßen kann
            </p>
        </div>

    )
}

