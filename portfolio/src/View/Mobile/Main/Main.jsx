import Header from "./Header/Header";
import MainBody from "./MainBody/MainBody";
import Menu from './Menu/Menu'
import React, { useState } from "react";
import './Main.css';

function MobileMain() {
    const beta = true;
    const [menu, setMenu] = useState(false);
    const handleMenuMobileClick= () => {
        setMenu(!menu);
    }
    if (beta) {
        return (
            <div className='MobileBody' onClick={menu ? handleMenuMobileClick : null}>
                <Header handleMenuMobileClick={handleMenuMobileClick}/>
                <div className={'mobileMenu'}>
                    {menu && <Menu/>}
                </div>
                <MainBody/>
                <BetaText />
                <BetaButton />
            </div>
        );
    } else {
        return (
            <div className='MobileBody' onClick={menu ? handleMenuMobileClick : null}>
                <Header handleMenuMobileClick={handleMenuMobileClick}/>
                <div className={'mobileMenu'}>
                    {menu && <Menu/>}
                </div>
                <MainBody/>
            </div>
        );
    }

}

export default MobileMain;

function BetaText() {
    return (
        <p className={'beta_text'}>
            Wir befinden uns derzeit noch im Aufbau.
            Schreibe uns eine E-Mail um der Erste zu sei,
            der die neue Website begrüßen kann
        </p>
    )
}

function BetaButton() {
    const Contact = () => {
        let email = "kontakt@warkring.org";
        let subject = encodeURIComponent("Kontaktanfrage von: {Ihren Namen eintragen}");
        window.location.href = `mailto:${email}?subject=${subject}`;
    }
    return (
        <button className={'first_contact_button'} onClick={Contact}>Jetzt kontaktieren</button>
    )
}
