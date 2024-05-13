import Header from "../Header/Header";
import Menu from "../Header/Menu/Menu";
import React, {useState} from "react";

export default function Main() {

    const style = {
        display: 'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    }

    const styleParagraphContainer = {
        width: '90%',
        background: '#171717',
        padding: '20px 0 20px 0'
    }

    const [menu, setMenu] = useState(false);

    const handleMenuMobileClick = () => {
        setMenu(!menu);
    }

    return (
        <div style={style}>
            <Header handleMenuMobileClick={handleMenuMobileClick}/>
            <div className={'mobileMenu'}>
                {menu && <Menu currentSelected={'services'} setStatus={'hilfe'}/>}
            </div>
            <div style={styleParagraphContainer}>
                <Paragraph props={'Lukas Krings'}/>
                <Paragraph props={'Im Boisdorfer Feld 17'}/>
                <Paragraph props={'50169 Kerpen'}/>
                <Paragraph props={'+49 1575 4627989'}/>
                <Paragraph props={'kontakt@warkring.org'}/>
            </div>
        </div>
    )
}

function Paragraph({props}) {

    const styleText = {
        color: 'white',
        margin: '10px 0 10px 10px'
    }

    return (
        <p style={styleText}>{props}</p>
    )
}