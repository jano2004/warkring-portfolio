import './MainServicesMobile.css';
import { services } from './Service/ServiceData';
import Service from './Service/Service';

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