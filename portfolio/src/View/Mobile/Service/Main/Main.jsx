import './ServiceMainMobile.css';
import Header from "../../Header/Header";
import Menu from "../../Header/Menu/Menu";
import React, {useState} from "react";
import ServiceCard from "../ServiceCard/ServiceCard";
import ServiceBody from "../ServiceBody/ServiceBody";
import { content } from '../ServiceCard/ServiceCardContent';

export default function Main({setStatus}) {

    const [menu, setMenu] = useState(false);

    const handleMenuMobileClick = () => {
        setMenu(!menu);
    }

    return (
        <section className={'services_section'} onClick={menu ? handleMenuMobileClick : null}>
            <Header handleMenuMobileClick={handleMenuMobileClick}/>
            <div className={'mobileMenu'}>
                {menu && <Menu currentSelected={'services'} setStatus={setStatus}/>}
            </div>
            <ServiceBody/>
            <div className={'services_service_card_section'}>
                {Object.values(content).map((service, index) => (
                    <ServiceCard key={index} props={service}/>
                ))}
            </div>
            <Beta/>
            <div style={{height: '70px'}}></div>
        </section>
    )
}

function Beta() {
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