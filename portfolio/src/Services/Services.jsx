import {serviceData} from './ServiceData';
import renderServicePack from './Service/Service'

function Services() {
    return(
        <div className='main_service_container'>
            {serviceData.map((pack, index) => renderServicePack(pack, index))}
        </div>
    )
}

export default Services;