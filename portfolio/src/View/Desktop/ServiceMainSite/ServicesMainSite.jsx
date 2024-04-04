import React from 'react';
import './ServicesMainSite.css';
const MainPageService = () => import('../BluePrints/Cards/Services/MainPageService');
const service = () => import('../BluePrints/Cards/Services/MainPageServiceData');

function ServicesMainSite() {
    try {
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
                    <MainPageService key={index} serviceObject={item.serviceObject}/>
                ))}
            </div>
        );
    } catch (e) {
        console.log('Cant render MainPageService')
    }
}

export default ServicesMainSite;
