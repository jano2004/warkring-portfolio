import './MainServicesMobile.css';
import Service from './Service/Service';
import { services } from './Service/ServiceData';

export default function MainServices() {
    return (
        <div className={'main_service_section'}>
            <p className={'main_service_top'}>services.</p>
            <div className={'main_services_container'}>
                {services.map((service, index) => (
                    <Service key={index} {...service} />
                ))}
            </div>
        </div>
    );
}