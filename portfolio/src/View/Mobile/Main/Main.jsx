import React, { useState } from 'react';
import Header from "./Header/Header";
import MainBody from "./MainBody/MainBody";
import ImageWithText from "./ImageWithText/ImageWithText";
import Cards from "./Cards/Cards";
import Services from "./Service/Services";
import Footer from "./Footer/Footer";
import './Main.css';
import Catalog from "../Catalog/Catalog";

function MobileMain({ handleMoreClick, handleHomeClick, handleLoginClick }) {
    const [catalog, setCatalog] = useState(false); // Verwenden Sie einen boolean für den Zustand

    const handleOpenCatalog = () => {
        setCatalog(prevCatalog => !prevCatalog);
    }

    return (
        <div>
            <Header handleHomeClick={handleHomeClick} handleLoginClick={handleLoginClick} handleOpenCatalog={handleOpenCatalog} />
            <div className={`main_catalog_section ${catalog ? 'shownCatalog' : 'hiddenCatalog'}`}>
                <Catalog />
            </div>
            <MainBody />
            <ImageWithText header={'!!BETA!!'} style={{ color: '#111111' }} />
            <ImageWithText header={'PROFESSIONELLE WEBSEITEN FÜR FAIRE PREISE'} text={'Unser Team kreiert maßgeschneiderte Webseiten zu <br> fairen Preisen, perfekt abgestimmt auf Ihre <br>individuellen Bedürfnisse und Ziele.'} />
            <Cards />
            <ImageWithText header={'WAS BIETEN WIR AN?'} text={'Wir bieten eine Vielfalt von Website-Services an, um genau das richtige Angebot für dich zu haben!'} />
            <Services handleMoreClick={handleMoreClick} />
            <Footer />
        </div>
    );
}

export default MobileMain;
