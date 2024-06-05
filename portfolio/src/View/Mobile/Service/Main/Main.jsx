import Header from "../../Header/Header";
import Menu from "../../Header/Menu/Menu";
import React, {useState} from "react";
import ServiceCard from "../ServiceCard/ServiceCard";
import { content } from '../ServiceCard/ServiceCardContent';
import useDarkMode from "../../../../Services/ThemeService/ThemeService";
import {colors} from "../../../../Services/ThemeService/Colors";
import Footer from "../../Footer/Footer";

export default function Main({setStatus}) {

    const [menu, setMenu] = useState(false);

    const handleMenuMobileClick = () => {
        setMenu(!menu);
    }

    const [isDarkMode] = useDarkMode();

    const mobileMenuStyle = {
        transition: 'transform 0.2s ease-in-out',
        width: '100%',
        transform: menu ? 'translateX(0)' : 'translateX(-100%)',
     };

    const style = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        background: colors.mainBackgroundColor(isDarkMode)
    }

    const styleCardSection = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    }

    return (
        <section style={style} onClick={menu ? handleMenuMobileClick : null}>
            <Header handleMenuMobileClick={handleMenuMobileClick}/>
            <div className={'mobileMenu'} style={mobileMenuStyle}>
                {menu && <Menu currentSelected={'services'}/>}
             </div>
            <div style={styleCardSection}>
                {Object.values(content).map((service, index) => (
                    <ServiceCard key={index} props={service}/>
                ))}
            </div>
            <div style={{height: '70px'}}></div>
            <Footer />
        </section>
    )
}
