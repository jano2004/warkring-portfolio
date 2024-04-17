import ServicesMain from './Desktop_ServicesComponents/Desktop_ServicesMain/Desktop_ServicesMain'
import ServicesCards from './Desktop_ServicesComponents/Desktop_ServicesCards/Desktop_ServicesCards';
import ServiceTiles from './Desktop_ServicesComponents/Desktop_ServiceTiles/Desktop_ServiceTiles';

function Services() {
    return(
        <div className='desktop_main_services_container'>
            {/**/}<ServicesMain />
            <ServicesCards />
            <ServiceTiles />
        </div>
    )
}

export default Services;