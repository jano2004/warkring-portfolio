import React, {useState} from "react";

import useDarkMode from "../../../Services/ThemeService/ThemeService";
import {colors} from "../../../Services/ThemeService/Colors";
import Header from "../Header/Header";
import Menu from "../Header/Menu/Menu";
import AboutBody from "../AboutUs/AboutBody";
import Footer from "../Footer/Footer";

export default function Main({setStatus}) {
    const [isDarkMode] = useDarkMode();

    const [menu, setMenu] = useState(false);

    const handleMenuMobileClick = () => {
        setMenu(!menu);
    }

    const styles= { 
        overflowX: 'hidden',
        backgroundColor: colors.mainBackgroundColor(isDarkMode),
        color: colors.mainTextColor(isDarkMode),
    }

    return (
        <section style={styles} onClick={menu ? handleMenuMobileClick : null}>
            <Header handleMenuMobileClick={handleMenuMobileClick}/>
            <div className={'mobileMenu'}>
                {menu && <Menu currentSelected={'about'} setStatus={setStatus}/>}
            </div>
            <AboutBody />
            <Footer />
        </section>
    )
}