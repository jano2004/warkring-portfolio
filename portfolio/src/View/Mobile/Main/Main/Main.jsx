import Header from '../../Header/Header';
import MainBody from '../MainBody/MainBody';
import Menu from '../../Header/Menu/Menu';
import MainServices from '../MainServices/MainServices';
import MainFeatures from '../MainFeatures/MainFeatures';
import React, { useState } from "react";
import './MainMobile.css';
import MainContact from "../MainContact/MainContact";

function MobileMain() {
    const beta = true;

    const [menu, setMenu] = useState(false);

    if (beta) {
        const handleMenuMobileClick = () => {
            return null;
        }
        return (
            <div className='MobileBody' onClick={menu ? handleMenuMobileClick : null}>
                <Header handleMenuMobileClick={handleMenuMobileClick}/>
                <div className={'mobileMenu'}>
                    {menu && <Menu/>}
                </div>
                <MainBody/>
                <MainServices />
                <MainFeatures />
                <MainContact />
                <Beta />
                <div style={{height: '70px'}}></div>
            </div>
        );
    } else {
        const handleMenuMobileClick = () => {
            setMenu(!menu);
        }
        return (
            <div className='MobileBody' onClick={menu ? handleMenuMobileClick : null}>
                <Header handleMenuMobileClick={handleMenuMobileClick}/>
                <div className={'mobileMenu'}>
                    {menu && <Menu/>}
                </div>
                <MainBody/>
                <MainServices />
                <MainFeatures />
                <MainContact />
            </div>
        );
    }

}

export default MobileMain;

function Beta() {
    const Contact = () => {
        let email = "kontakt@warkring.org";
        let subject = encodeURIComponent("Kontaktanfrage von: {Ihren Namen eintragen}");
        window.location.href = `mailto:${email}?subject=${subject}`;
    }
    return (
        <div className={'Beta'}>
            <p className={'beta_text'}>
                Wir befinden uns derzeit noch im Aufbau.
                Schreibe uns eine E-Mail um der Erste zu sei,
                der die neue Website begrüßen kann
            </p>
        </div>

    )
}