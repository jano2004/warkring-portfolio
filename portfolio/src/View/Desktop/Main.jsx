import Header from "./Header/Header";
import MainBody from "./MainBody/MainBody";
import FeatureSlides from "./Feature/FeaturesSlides/FeatureSlides";
import ServicesMainSite from "./ServiceMainSite/ServicesMainSite";
import Services from "./Services/Services";
import React from "react";

function DesktopMain() {
    return (
        <>
            <Header />
            <MainBody />
            <FeatureSlides />
            <ServicesMainSite />
            <Services />
        </>
    )
}

export default DesktopMain;