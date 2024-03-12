import React from 'react';
import MainPageService from '../BluePrints/Cards/Services/MainPageService';
import { service } from '../BluePrints/Cards/Services/MainPageServiceData';
import './ServicesMainSite.css';

function ServicesMainSite() {
    return (
        <div className="Main_ServicesMainSite_Container">
            <div className="Feature_Text_Button">
                <div className="Feature_Text">
                    <p>UNSERE LEISTUNGEN</p>
                </div>
                <div className="Feature_Button">
                    <button>ALLE LEISTUNGEN</button>
                </div>
            </div>
            {service.map((item, index) => (
                <MainPageService/>
            ))}
        </div>
    );
}

export default ServicesMainSite;
