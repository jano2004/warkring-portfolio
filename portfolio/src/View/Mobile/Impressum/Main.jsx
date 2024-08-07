import Header from "../Header/Header";
import Menu from "../Header/Menu/Menu";
import React, {useState} from "react";
import {colors} from "../../../Services/ThemeService/Colors";

export default function Main() {

    const style = {
        display: 'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    }

    const styleParagraphContainer = {
        width: '90%',
        background: colors.cardBackgroundColor,
        padding: '20px 0 20px 0'
    }

    const [menu, setMenu] = useState(false);

    const handleMenuMobileClick = () => {
        setMenu(!menu);
    }

    const mobileMenuStyle = {
        transition: 'transform 0.2s ease-in-out',
        width: '100%',
        transform: menu ? 'translateX(0)' : 'translateX(-100%)',
    };

    return (
        <div style={{
            height: '100vh',
            width: '100%',
            background: colors.mainBackgroundColor}}>
            <div style={style}>
                <Header handleMenuMobileClick={handleMenuMobileClick}/>
                <div style={mobileMenuStyle}>
                    {menu && <Menu currentSelected={''}/>}
                </div>
                <div style={styleParagraphContainer}>
                    <Paragraph props={'Lukas Krings'}/>
                    <Paragraph props={'Im Boisdorfer Feld 17'}/>
                    <Paragraph props={'50169 Kerpen'}/>
                    <Paragraph props={'+49 1575 4627989'}/>
                    <Paragraph props={'kontakt@warkring.org'}/>
                </div>
            </div>
        </div>
    )
}

function Paragraph({props}) {

    const styleText = {
        color: colors.mainTextColor,
        margin: '10px 0 10px 10px'
    }

    return (
        <p style={styleText}>{props}</p>
    )
}