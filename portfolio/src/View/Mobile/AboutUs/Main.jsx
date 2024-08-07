import React, {useState} from "react";

import {colors} from "../../../Services/ThemeService/Colors";
import Header from "../Header/Header";
import Menu from "../Header/Menu/Menu";
import AboutBody from "../AboutUs/AboutBody";
import Footer from "../Footer/Footer";

export default function Main({setStatus}) {

    const [menu, setMenu] = useState(false);

    const handleMenuMobileClick = () => {
        setMenu(!menu);
    }

    const mobileMenuStyle = {
        transition: 'transform 0.2s ease-in-out',
        width: '100%',
        transform: menu ? 'translateX(0)' : 'translateX(-100%)',
     };

    const styles= { 
        overflowX: 'hidden',
        backgroundColor: colors.mainBackgroundColor,
        color: colors.mainTextColor,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }

    return (
        <section style={styles}>
            <Header handleMenuMobileClick={handleMenuMobileClick}/>
            <div className={'mobileMenu'} style={mobileMenuStyle}>
                {menu && <Menu currentSelected={'über uns'}/>}
             </div>
            <AboutBody />
            <Footer />
        </section>
    )
}