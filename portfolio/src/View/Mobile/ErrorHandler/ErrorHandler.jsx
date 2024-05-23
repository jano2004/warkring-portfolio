import Header from "../Header/Header";
import Menu from "../Header/Menu/Menu";
import React, {useState} from "react";
import {colors} from "../../../Services/ThemeService/Colors";
import useDarkMode from "../../../Services/ThemeService/ThemeService";

export default function ErrorHandler({props}) {
    const [menu, setMenu] = useState(false);

    const handleMenuMobileClick = () => {
        setMenu(!menu);
    }

    const [isDarkMode] = useDarkMode();

    return (
        <div style={{width: '100%', height: '100vh', background: colors.mainBackgroundColor(isDarkMode)}}>
            <Header handleMenuMobileClick={handleMenuMobileClick}/>
            <div className={'mobileMenu'}>
                {menu && <Menu currentSelected={props.toLowerCase()}/>}
            </div>
            <p style={{color: colors.mainTextColor(isDarkMode)}}>Die {props}-Seite existiert noch nicht!</p>
        </div>
    )
}