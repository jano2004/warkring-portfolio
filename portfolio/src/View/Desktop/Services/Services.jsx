import ServicesMain from './Desktop_ServicesComponents/Desktop_ServicesMain/Desktop_ServicesMain'
import ServicesCards from './Desktop_ServicesComponents/Desktop_ServicesCards/Desktop_ServicesCards';
import ServiceTiles from './Desktop_ServicesComponents/Desktop_ServiceTiles/Desktop_ServiceTiles';
import ServiceCustom from './Desktop_ServicesComponents/Desktop_ServiceCustom/Desktop_ServiceCustom';

function Services() {
    return(
        <div className='desktop_main_services_container'>
            {/**/}<ServicesMain />
            <ServicesCards />
            <ServiceTiles />
            <ServiceCustom />
        </div>
    )
}

export default Services;