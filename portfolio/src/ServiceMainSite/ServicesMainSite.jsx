import React from 'react';
import MainPageService from '../BluePrints/Cards/Services/MainPageService';
import { service } from '../BluePrints/Cards/Services/MainPageServiceData';

function ServicesMainSite() {
    return (
        <div className="services-main-site">
            {service.map((item, index) => (
                <MainPageService
                    key={index}
                    type={item.type}
                    description={item.description}
                    price={item.price}
                    background={item.background}
                />
            ))}
        </div>
    );
}

export default ServicesMainSite;
