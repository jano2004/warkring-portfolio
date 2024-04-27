//import React, { useState } from 'react';
import Header from "./Header/Header";
import MainBody from "./MainBody/MainBody";
import './Main.css';

function MobileMain({ handleMenuMobileClick }) {
    return (
        <div className='MobileBody'>
            <Header handleMenuMobileClick={handleMenuMobileClick} />
            <MainBody />
        </div>
    );
}

export default MobileMain;
