import {serviceData} from './ServiceData';
import Service from './Service/Service'

function Services() {
    return(
        <div>
            {serviceData.map((pack, index) => (
                <div className='main_service_container' key={index}>
                    <h1>{pack.packName}</h1>
                    <Service serviceData={serviceData[index].features} />
                </div>
            ))}
        </div>
    )
}

export default Services;