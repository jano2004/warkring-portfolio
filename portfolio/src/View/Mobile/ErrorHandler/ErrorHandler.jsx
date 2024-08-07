import Header from "../Header/Header";
import Menu from "../Header/Menu/Menu";
import React, {useState} from "react";
import {colors} from "../../../Services/ThemeService/Colors";

export default function ErrorHandler({props}) {
    const [menu, setMenu] = useState(false);

    const handleMenuMobileClick = () => {
        setMenu(!menu);
    }

    return (
        <div style={{width: '100%', height: '100vh', background: colors.mainBackgroundColor}}>
            <Header handleMenuMobileClick={handleMenuMobileClick}/>
            <div className={'mobileMenu'}>
                {menu && <Menu currentSelected={props.toLowerCase()}/>}
            </div>
            <p style={{color: colors.mainTextColor}}>Die {props}-Seite existiert noch nicht!</p>
        </div>
    )
}