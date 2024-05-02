import Header from "./Header/Header";
import MainBody from "./MainBody/MainBody";
import Cardslide from './Cardslide/Main';
import Menu from './Menu/Menu'
import React, { useState } from "react";
import './Main.css';

function MobileMain() {
    const [menu, setMenu] = useState(false);
    const handleMenuMobileClick= () => {
        setMenu(!menu);
    }
    return (
        <div className='MobileBody' onClick={menu ? handleMenuMobileClick : null}>
            <Header handleMenuMobileClick={handleMenuMobileClick}/>
            <div className={'mobileMenu'}>
                {menu && <Menu />}
            </div>
            <MainBody />
            <Cardslide />
        </div>
    );
}

export default MobileMain;
