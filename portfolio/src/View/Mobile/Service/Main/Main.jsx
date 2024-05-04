import './ServiceMainMobile.css';
import Header from "../../Header/Header";
import Menu from "../../Header/Menu/Menu";
import React, {useState} from "react";
import ServiceCard from "../ServiceCard/ServiceCard";
import ServiceBody from "../ServiceBody/ServiceBody";
import { content } from '../ServiceCard/ServiceCardContent';

export default function Main() {

    const [menu, setMenu] = useState(false);

    const handleMenuMobileClick = () => {
        setMenu(!menu);
    }

    return (
        <section className={'services_section'}>
            <Header handleMenuMobileClick={handleMenuMobileClick}/>
            <div className={'mobileMenu'}>
                {menu && <Menu currentSelected={'services'}/>}
            </div>
            <ServiceBody/>
            <div className={'services_service_card_section'}>
                {Object.values(content).map((service, index) => (
                    <ServiceCard key={index} props={service}/>
                ))}
            </div>
            <div style={{height: '70px'}}></div>
        </section>
    )
}